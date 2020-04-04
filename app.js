const express = require("express");
const app = new express();
const bookRouter = require("./routers/books");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_75jkfncr:BeemLab5@ds331758.mlab.com:31758/heroku_75jkfncr",
  {
    useNewUrlParser: true,
  }
);

mongoose.Promise = global.Promise;

app.use("/book", bookRouter);

module.exports = app;
