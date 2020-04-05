const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const bookRouter = require("./routers/books");
app.use(bodyParser.json());

app.use(express.static("client/build"));

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://beenish:beemDBAtlas@cluster0-0u4hm.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongooDB connected"))
  .catch((err) => console.log(err));

app.use("/api/book", bookRouter);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
