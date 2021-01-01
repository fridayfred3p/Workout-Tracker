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

workoutSchema.virtual("totalDuration").get(function(){
  let totalDuration = 0;
  this.exercises.forEach(exercise => {
    totalDuration+= exercise.duration;
});
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;