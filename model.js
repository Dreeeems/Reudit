const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: "true" },
  description: { type: String, required: "true" },
  votes: { type: Number, default: 0 },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: "true" },
  email: { type: String, required: "true" },
  password: { type: String, required: "true" },
  createdAt: { type: Date, default: Date.now },
});

const commentSchema = new mongoose.Schema({
  content: { type: String, required: "true" },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = {
  Post: mongoose.model("Post", postSchema),
  User: mongoose.model("User", userSchema),
  Comment: mongoose.model("Comment", commentSchema),
};
