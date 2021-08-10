var express = require("express");
const path = require("path");
var app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  const absolutePath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(absolutePath);
});

module.exports = app;
