var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var submissionSchema = new Schema({
  location: { type: String, required: true },
  quantity: { type: Number, required: true },
  foodName: { type: String, required: true },
  foodWeight: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Submission", submissionSchema);
