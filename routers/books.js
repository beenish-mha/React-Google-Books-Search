const express = require("express");
const router = express.Router();
const Book = require("../models/books");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling get request",
  });
});

router.post("/", (req, res, next) => {
  const book = new Book({
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
    title: req.body.title,
  });
  book
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.status(201).json({
    message: "handling post request",
    bookCreated: book,
  });
});

router.get("/:title", (req, res, next) => {
  const id = req.params.title;
  if (id === "beenish") {
    res.status(200).json({
      message: "handling sepecial request",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "not very special request",
      id: id,
    });
  }
});

module.exports = router;
