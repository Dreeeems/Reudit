const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/posts", (req, res) => {
  res.send("Get all posts");
});

app.listen(port, () => {
  console.log("App launch on port : " + port + " All good");
});
