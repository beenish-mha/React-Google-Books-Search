import React from "react";

function AllBooks({ books }) {
  return books.map((book) => (
    <div className="App">
      <h2>{book.volumeInfo.title}</h2>
      <h4>{book.volumeInfo.authors}</h4>
      <p>Description : {book.volumeInfo.description}</p>
      <img
        src={book.volumeInfo.imageLinks.smallThumbnail}
        alt={book.volumeInfo.title}
      />
      <br />
      <a href={book.volumeInfo.previewLink}>Book preview</a>
    </div>
  ));
}

export default AllBooks;
