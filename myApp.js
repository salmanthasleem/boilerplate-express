var express = require("express");
const path = require("path");
var app = express();

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const absolutePath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(absolutePath);
});

module.exports = app;
