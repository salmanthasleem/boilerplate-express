var express = require("express");
const path = require("path");
var app = express();

app.get("/", (req, res) => {
  const absolutePath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(absolutePath);
});

app.use(express.static("./public"));

module.exports = app;
