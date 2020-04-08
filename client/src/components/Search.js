import React from "react";
import API from "../utils/Api";
import "./Main.css";
import Navbar from "./Navbar";
import Header from "./Header";

import SearchBook from "./SearchBook";
import Footer from "./Footer";

class Search extends React.Component {
  state = {
    isLoading: true,
    search: "",
    books: [],
  };

  getBook = (e) => {
    e.preventDefault();
    let searchedBook = e.target.elements.bookName.value;
    API.getBooks(searchedBook).then((res) => {
      this.setState({
        books: res.data.items,
      }).catch((err) => {
        console.log(err);
      });

      // console.log(this.state.books);
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <SearchBook books={this.state.books} getBook={this.getBook} />
        <Footer />
      </div>
    );
  }
}

export default Search;
