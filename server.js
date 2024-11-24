const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Post, User, Comment } = require("./model");

//Launch mongoose
mongoose
  .connect("mongodb://localhost:27017/reuddit")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Get all posts
app.get("/posts", async (req, res) => {
  try {
    const allPost = await Post.find();
    res.json(allPost);
  } catch (err) {
    res.status(500).send("Error receiving posts:" + err);
  }
});

//Get a post
app.get("/post/:postId", async (req, res) => {
  try {
    const post = await Post.find(req.params);
    res.json(post);
  } catch (err) {
    res.status(500).send("Error receiving this post:" + err);
  }
});
//delete a post

//create user
app.post("/signin", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).send("Error creating user: " + err);
  }
});
//login

//get comments

//create comment

app.listen(port, () => {
  console.log("App launch on port : " + port + " All good");
});
