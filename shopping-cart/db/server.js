require("dotenv").config();
const express = require("express");
const db = require("./conn");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3516
const cors = require('cors');
app.use(cors());

// app.use(express.static("public"));

// app.post("/api/cart/post", async (req , res) => {
//   try {
//     const data = await db.query('INSERT INTO cart (id, item, price) VALUES ($1, $2, $3) RETURNING *;', [req.body.id, req.body.name, req.body.email])
//     res.json(data.rows);
//     //console.log(data.rows)
//   } catch (error) {
//     // res.send("some error")
//     console.log(error)
//   }
  
// });

app.get("/api/cart", async (req , res) => {
  try {
    const data = await db.query('SELECT * FROM cart')
    let client = await db.connect();
    res.json(data.rows);
    client.release()
  } catch (error) {
    res.send(error.message)
  }
});

app.get("/api/cart/:id", async (req , res) => {
  try {
    let client = await db.connect();
    const data = await db.query(`SELECT * FROM cart WHERE id=${req.params.id};`)
    res.json(data.rows);
    console.log(data.rows);
    client.release()
  } catch (error) {
    res.send(error.message)
  }
});

app.patch('/api/cart/:id', async (req, res) => {
  try {
         const item = req.body.item || data.rows[0].item;
         const price = req.body.price || data.rows[0].price;
         //const id = req.body.id || data.rows[0].id;
       const data = await db.query('UPDATE cart SET (item, price) = ($1,$2) WHERE id=$3;', [item, price, req.params.id])
         res.json(data.rows);
    // ß }
  } catch (error) {
      res.send(error);
  }
})

app.delete('/api/cart/:id', async (req, res) => {
  try {
     const data = await db.query('DELETE FROM cart WHERE id=$1;', [req.params.id]);
          res.json(data.rows);
      }
      catch (error) {
      res.json(error);
  }
})

app.listen(PORT, () => { 
  console.log(`listening on Port ${3001}`);
});