const bookRouter = require("./routers/books");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book", {
  useNewUrlParser: true,
});

app.use("/book", bookRouter);

module.exports = app;
