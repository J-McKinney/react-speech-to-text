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

const commentsSeed = [
  {
    Comment: "Comment",
    date: new Date(Date.now())
  }
];

db.Comments.deleteMany({})
  .then(() => db.Comments.collection.insertMany(commentsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0)
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
