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
<<<<<<< HEAD
  let messageTxt = "Hello Json";
  const { message } =
    process.env.MESSAGE_STYLE === uppercase
      ? messageTxt.toLocaleUpperCase()
      : messageTxt;
  res.json(message);
=======
  res.json({ message: "Hello json" });
>>>>>>> b573f3fe3bf943cd54d9be8899dca3feab365e10
});

module.exports = app;
