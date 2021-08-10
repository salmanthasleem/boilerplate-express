var express = require("express");
const path = require("path");
var app = express();

app.get("/", (req, res) => {
  const absolutePath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(absolutePath);
});

const absoluteStatic = path.resolve(__dirname, "./public");

app.use(express.static(absoluteStatic));

module.exports = app;
