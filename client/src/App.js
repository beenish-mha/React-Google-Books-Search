import React from "react";
import API from "./utils/Api";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import AllBooks from "./components/AllBooks";
import SearchBook from "./components/SearchBook";
import Footer from "./components/Footer";
//import SavedBooks from "./components/SavedBooks";

class App extends React.Component {
  state = {
    isLoading: true,
    search: "",
    books: [],
    dbBooks: [],
  };

  componentDidMount() {
    API.getBooks().then((res) => {
      this.setState({
        books: res.data.items,

        isLoading: false,
      });

      // console.log(this.state.books);
    });

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
        <SearchBook books={this.state.books} />
        <Footer />
        {/* <AllBooks books={this.state.books} /> */}
        {/* <SavedBooks books={this.state.dbBooks} /> */}
      </div>
    );
  }
}

export default App;
