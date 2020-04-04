const express = require("express");
const app = new express();
const bookRouter = require("./routers/books");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_75jkfncr:BeemLab5@ds331758.mlab.com:31758/heroku_75jkfncr",
  {
    useNewUrlParser: true,
  }
);

mongoose.Promise = global.Promise;

app.use("/book", bookRouter);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = app;
