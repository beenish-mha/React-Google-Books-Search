import React from "react";
import API from "../utils/Api";

function SavedBooks({ books }) {
  function DeleteBook(e) {
    const book = books.find((book) => book._id === e.target.name);
    console.log(book._id);
    API.deleteBook(book._id).then((res) => console.log(res));
  }
  return books.map((book) => (
    <div className="mainDiv" key={book._id}>
      <div>
        <div className="btnDiv">
          <button type="button">
            <a target="_blank" rel="noopener noreferrer" href={book.link}>
              View
            </a>
          </button>
          <button type="button" name={book._id} onClick={DeleteBook}>
            Delete
          </button>
        </div>
        <div className="titleDiv">
          <h3 className="card-title">{book.title}</h3>
          <h5 className="card-title">{book.authors}</h5>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <img src={book.image} className="bookImg" alt={book.title} />
          </div>
          <div className="col">
            <p className="descriptionDiv">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default SavedBooks;
