import React from "react";

import AllBooks from "./AllBooks";

class SearchBook extends React.Component {
  state = {
    search: "",
  };

  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    let filteredbooks = this.props.books.filter((book) => {
      return (
        book.volumeInfo.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <div className="bookSearchDiv container-fluid">
          <h6 className="bookSearchHeading">Book Search</h6>
          <input
            className="search-text form-control form-control-lg"
            type="text"
            placeholder="Enter Book Name "
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        <AllBooks books={filteredbooks} />
      </div>
    );
  }
}

export default SearchBook;
