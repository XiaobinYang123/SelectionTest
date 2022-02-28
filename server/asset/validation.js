const { check } = require("express-validator");

const addSubmissionValidate = [
  check("location", "location is required").notEmpty(),
  check("quantity", "quantity is required")
    .isNumeric()
    .withMessage("quantity must be numeric")
    .isInt({ min: 1 })
    .withMessage("ducks must be greater than 0"),
  check("foodName", "food name is required").notEmpty(),
  check("foodWeight", "food weight is required")
    .isNumeric()
    .withMessage("Food weight must be numeric")
    .isInt({ gt: 0 })
    .withMessage("Food weight must be greater than 0"),
  check("date", "Date is required")
    .notEmpty()
    .isISO8601()
    .withMessage("Date should be valid")
    .isBefore()
    .withMessage("Date can not be in the future"),
];

exports.addSubmissionValidate = addSubmissionValidate;
