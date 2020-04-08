import React from "react";

import AllBooks from "./AllBooks";

class SearchBook extends React.Component {
  state = {
    search: "",
  };

  render() {
    return (
      <div>
        <div className="bookSearchDiv container-fluid">
          <h6 className="bookSearchHeading">Book Search</h6>
          <form onSubmit={this.props.getBook}>
            <input
              className="search-text"
              type="text"
              name="bookName"
              placeholder="Enter Book Name "
            />
            <button className="submitBtn">submit</button>
          </form>
        </div>
        <AllBooks books={this.props.books} />
      </div>
    );
  }
}

export default SearchBook;
