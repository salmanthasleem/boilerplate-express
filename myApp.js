var express = require("express");
const path = require("path");
var app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};
const timeLogger = (req, res, next) => {
  req.time = new Date().toString();
  next();
};
const absoluteAsset = path.resolve(__dirname, "./public");
app.use("/public", express.static(absoluteAsset));

app.get("/", (req, res) => {
  const absolutePath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(absolutePath);
});

app.get("/json", logger, (req, res) => {
  const message =
    process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({
    message,
  });
});

app.get("/now", timeLogger, (req, res) => {
  res.json({ time: req.time });
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

module.exports = app;
