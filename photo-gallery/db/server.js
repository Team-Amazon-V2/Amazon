require("dotenv").config();
const express = require("express");
const db = require("./conn");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3517
const cors = require('cors');
app.use(cors());

app.get("/api/photos/:id", async (req , res) => {
  try {
    let client = await db.connect();
    const data = await db.query(`SELECT * FROM photo_gallery WHERE asin_id=${req.params.id};`)
    res.json(data.rows);
    console.log(data.rows);
    client.release()
  } catch (error) {
    res.send(error.message)
  }
});

app.listen(PORT, () => { 
  console.log(`listening on Port ${3517}`);
});