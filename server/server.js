const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello to the word");
});

app.listen(port, () => {
  console.log(`Server is runing is running on   Port ${port} `);
}