require("express-async-errors");
require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET request success");
});

app.post("/", (req, res) => {
  res.send("POST request success");
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log("listening on PORT 5000");
});
