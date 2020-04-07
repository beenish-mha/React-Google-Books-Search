const express = require("express");
const router = express.Router();
const Book = require("../models/books");

router.get("/", (req, res, next) => {
  Book.find()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
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
      res.status(201).json({
        message: "handling post request",
        bookCreated: book,
      });
      // console.log(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:bookId", (req, res, next) => {
  const id = req.params.bookId;
  Book.findById(id)
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:bookId", (req, res, next) => {
  const id = req.params.bookId;
  Book.remove({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
