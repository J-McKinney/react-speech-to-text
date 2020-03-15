const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  comments: { type: String },
  date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
