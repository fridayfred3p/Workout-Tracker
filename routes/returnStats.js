const router = require("express").Router();
const path = require("path");

router.get("./stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('./exercises', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});