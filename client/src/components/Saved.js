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

    dbBooks: [],
  };

  componentDidMount() {
    API.getDBBooks().then((result) => {
      const booksResult = result.data;

      this.setState({
        dbBooks: booksResult,
      });

      //console.log(this.state.dbBooks);
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
