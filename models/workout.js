const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [ {
    type: Schema.Types.ObjectId,
    ref: "exercise"
  }],


});

const Example = mongoose.model("Example", workoutSchema);

module.exports = Example;