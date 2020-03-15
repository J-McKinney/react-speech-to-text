const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/speech2text",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);

const commentSeeds = [
  {
    Comment: "Comment",
    date: new Date(Date.now())
  }
];

db.Comment.deleteMany({})
  .then(() => db.Comment.collection.insertMany(commentSeeds))
  .then(data => {})
  .catch(err => {
    // console.error(err);
  });
