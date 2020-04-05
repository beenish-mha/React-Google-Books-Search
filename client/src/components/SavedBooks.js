import React from "react";

function SavedBooks({ books }) {
  return books.map((book) => (
    <div className="mainDiv">
      <div>
        <div className="btnDiv">
          <button type="button">View</button>
          <button type="button">Delete</button>
        </div>
        <div className="titleDiv">
          <h3 className="card-title">{book.title}</h3>
          <h5 className="card-title">{book.authors}</h5>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <img src={book.image} className="bookImg" alt={book.title} />
            <a href={book.link}>Book preview</a>
          </div>
          <div class="col">
            <p className="descriptionDiv">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default SavedBooks;
