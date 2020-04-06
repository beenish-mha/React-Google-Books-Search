import React from "react";
import API from "../utils/Api";
import "./Main.css";
import Navbar from "./Navbar";
import Header from "./Header";

import SearchBook from "./SearchBook";
import Footer from "./Footer";
//import SavedBooks from "./components/SavedBooks";

class Main extends React.Component {
  state = {
    isLoading: true,
    search: "",
    books: [],
    dbBooks: [],
  };

  getBook = (e) => {
    e.preventDefault();
    let searchedBook = e.target.elements.bookName.value;
    API.getBooks(searchedBook).then((res) => {
      this.setState({
        books: res.data.items,
      });

      // console.log(this.state.books);
    });
  };

  componentDidMount() {
    API.getDBBooks().then((result) => {
      const booksResult = result.data;

      this.setState({
        dbBooks: booksResult,
      });

      // console.log(this.state.dbBooks);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <SearchBook books={this.state.books} getBook={this.getBook} />
        <Footer />

        {/* <SavedBooks books={this.state.dbBooks} /> */}
      </div>
    );
  }
}

export default Main;
