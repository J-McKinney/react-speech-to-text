const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", userSchema);

module.exports = Comment;
