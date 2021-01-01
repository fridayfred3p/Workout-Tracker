const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = {toJson: {virtuals: true}};

const workoutSchema = new Schema({
  
  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [ {
    type: Schema.Types.ObjectId,
    ref: "exercise"
  }]

}, opts);

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;