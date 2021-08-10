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
  let messageTxt =
    process.env.MESSAGE_STYLE === "uppercase"
      ? "Hello Json".toUpperCase()
      : "Hello Json";

  res.json({ message: messageTxt });
});

module.exports = app;
