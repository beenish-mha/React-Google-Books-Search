import React from "react";
import API from "../utils/Api";
import "./Main.css";
import Navbar from "./Navbar";
import Header from "./Header";

import Footer from "./Footer";
import SavedBooks from "./SavedBooks";

class Saved extends React.Component {
  state = {
    isLoading: true,
    search: "",
    books: [],
    dbBooks: [],
  };

  //   getBook = (e) => {
  //     e.preventDefault();
  //     let searchedBook = e.target.elements.bookName.value;
  //     API.getBooks(searchedBook).then((res) => {
  //       this.setState({
  //         books: res.data.items,
  //       });

  //       // console.log(this.state.books);
  //     });
  //   };

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
        <SavedBooks books={this.state.dbBooks} />
        <Footer />
      </div>
    );
  }
}

export default Saved;
