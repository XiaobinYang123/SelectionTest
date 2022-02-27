const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const Submission = require("../models/submissions");
const { addSubmissionValidate } = require("../asset/validation");

router.get("/", async (req, res, next) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/add", addSubmissionValidate, async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const submission = new Submission({
    location: req.body.location,
    quantity: req.body.quantity,
    foodName: req.body.foodName,
    foodWeight: req.body.foodWeight,
    date: req.body.date,
  });

  try {
    const response = await submission.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
