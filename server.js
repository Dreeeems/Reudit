const express = require("express");
const mongoose = require("mongoose");
const { Post, User, Comment } = require("./model");

//Launch mongoose
mongoose
  .connect("mongodb://localhost:27017/reuddit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
