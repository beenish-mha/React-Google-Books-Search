import React from "react";

function SavedBooks({ books }) {
  return books.map((book) => (
    <div className="App">
      <h2>{book.title}</h2>
      <h4>{book.authors}</h4>
      <p>Description : {book.description}</p>
      <img src={book.image} alt={book.title} />
      <br />
      <a href={book.Link}>Book preview</a>
    </div>
  ));
}

export default SavedBooks;
