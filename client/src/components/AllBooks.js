import React from "react";

function AllBooks({ books }) {
  return books.map((book) => (
    <div className="mainDiv">
      <div>
        <div className="btnDiv">
          <button type="button">View</button>
          <button type="button">Save</button>
        </div>
        <div className="titleDiv">
          <h3 className="card-title">{book.volumeInfo.title}</h3>
          <h5 className="card-title">{book.volumeInfo.authors}</h5>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              className="bookImg"
              alt={book.volumeInfo.title}
            />
            <a href={book.volumeInfo.previewLink}>Book preview</a>
          </div>
          <div class="col">
            <p className="descriptionDiv">{book.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default AllBooks;
