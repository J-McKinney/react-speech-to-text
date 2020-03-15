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

const commentSeed = [
  {
    comment: "Comment",
    date: new Date(Date.now())
  },
  {
    comment: "Commenting Now",
    date: new Date(Date.now())
  }
];

db.Comment
  .remove({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0)
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
