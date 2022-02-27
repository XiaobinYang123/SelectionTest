const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Submission = require("../models/submissions");

router.get("/", async (req, res, next) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
