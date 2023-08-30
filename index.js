const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send("Welcome to my app");
  })
  .post("/", (req, res) => {
    res.send("POST request success");
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}... at http://localhost:${PORT}/`);
});
