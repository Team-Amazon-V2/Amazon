const express = require("express");
const cors = require("cors");

const app = express();
app.use(json());

const PORT = 3013;

app.get("/amazon/footer", async (req, res) => {});
