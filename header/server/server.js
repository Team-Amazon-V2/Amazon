const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3012" || "http://localhost:3000",
    methods: ["GET"],
  })
);

const poolConfig = {
  host: "localhost",
  user: "atlantis",
  database: "amazon_clone",
  port: 5432,
};

const pool = new Pool(poolConfig);

const PORT = 3512;

app.get("/amazon/:item", async (req, res) => {
  const { item } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM items WHERE name ~* '${item}';`
    );
    console.log(data.rows);
    res.json(data.rows);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
