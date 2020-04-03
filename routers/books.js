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

module.exports = router;
