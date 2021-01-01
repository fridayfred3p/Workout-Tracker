const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const db = require('./models');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

db.workout.create({name: "new workout"})
  .then(dbWorkout => {
    console.log(dbWorkout);
  }).catch(({message}) => {
    console.log(message);
  });


// routes
app.use(require("./routes/api"));
app.use(require("./routes/returnStats"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
