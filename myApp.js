var express = require("express");
const path = require("path");
var app = express();

const absoluteAsset = path.resolve(__dirname, "./public");
app.use("/public", express.static(absoluteAsset));

app.get("/", (req, res) => {
  const absolutePath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  const message =
    process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({
    message,
  });
});

module.exports = app;
