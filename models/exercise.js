const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  },
});

const Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;
