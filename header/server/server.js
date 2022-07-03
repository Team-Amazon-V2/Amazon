const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3012",
    methods: ["GET"],
  })
);

const poolConfig = {
  connectionString:
    "postgres://fnhxvljpuvguhu:1d6974f136a4cee343e385afc17e6a7a9c4fcff038452b069f6512af88b5454f@ec2-44-205-41-76.compute-1.amazonaws.com:5432/d30mp7kuvm55ck",
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(poolConfig);

const PORT = 3512;

app.get("/amazon/:item", async (req, res) => {
  const { item } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM product WHERE product_name ~* '${item}';`
    );
    console.log(data.rows);
    res.json(data.rows);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
