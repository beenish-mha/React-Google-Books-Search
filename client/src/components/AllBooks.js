import React from "react";
import API from "../utils/Api";

function AllBooks({ books }) {
  const saveClicked = (id) => {
    const book = books.find((book) => book.id === id.target.name);

    API.saveBook({
      authors: book.volumeInfo.authors.join(),
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      title: book.volumeInfo.title,
    }).then((response) => {
      alert("book saved");
    });
  };

  return books.map((book) => (
    <div className="mainDiv" key={book.id}>
      <div>
        <div className="btnDiv">
          <button type="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={book.volumeInfo.previewLink}
            >
              View
            </a>
          </button>
          <button type="button" name={book.id} onClick={saveClicked}>
            Save
          </button>
        </div>
        <div className="titleDiv">
          <h3 className="card-title">{book.volumeInfo.title}</h3>
          <h5 className="card-title">{book.volumeInfo.authors}</h5>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              className="bookImg"
              alt={book.volumeInfo.title}
            />
          </div>
          <div className="col">
            <p className="descriptionDiv">{book.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default AllBooks;
