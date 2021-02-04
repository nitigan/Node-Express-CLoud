require('dotenv').config();

const express = require("express");
const app = express();
//const port = 3000;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World Nitigan 5000!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
