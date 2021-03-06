const router = require("express").Router();
const { db } = require("../models/exercise.js");
const exercise = require("../models/exercise.js");
const workout = require("../models/workout.js");

router.post("/api/exercise", (req, res) => {
  exercise.create(req.body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.post("/api/workout", (req, res) => {
    workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  exercise.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err =>{
    res.status(400).json(err);
  });
});
router.get("/api/workout", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/populated", (req, res) => {
  workout.find({})
  .populate('exercises')
  .then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
