const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const submissionRouter = require("./routes/submissions");

mongoose.connect("mongodb://127.0.0.1:27017/submissions", {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully.");
});

app.use(cors());
app.use(express.json());

app.use("/submissions", submissionRouter);

app.use((req, res, next) => {
  res.send("404");
  next();
});

app.use((err, req, res, next) => {
  res.status(500).json({
    err_code: 500,
    message: "server error",
  });
});

var server = app.listen(3333, function () {
  console.log("Listening on port " + server.address().port);
});
