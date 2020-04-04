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
    "mongodb+srv://beenish:beemDBAtlas@cluster0-0u4hm.mongodb.net/test?retryWrites=true&w=majority",
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
