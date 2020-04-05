import React from "react";
import AllBooks from "./AllBooks";

function SearchBook({ books }) {
  return (
    <div>
      <div className="bookSearchDiv container-fluid">
        <h6 className="bookSearchHeading">Book Search</h6>
        <input
          className="search-text form-control form-control-lg"
          type="text"
          placeholder="Enter Book Name "
        />
      </div>
      <AllBooks books={books} />
    </div>
  );
}

export default SearchBook;
