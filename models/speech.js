const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speechSchema = new Schema({
  sentence: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Speech = mongoose.model("Speech", speechSchema);

module.exports = Speech;
