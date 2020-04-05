import React from "react";
import API from "./utils/Api";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import AllBooks from "./components/AllBooks";
import SavedBooks from "./components/SavedBooks";

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

      //console.log(this.state.books);
    });

    API.getDBBooks().then((result) => {
      const booksResult = result.data;
      //const booksResult = JSON.stringify(result.data, null, 2);
      // console.log( JSON.stringify(result, null, 2));
      this.setState({
        dbBooks: booksResult,
      });

      console.log(this.state.dbBooks[0].title);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        {/* <AllBooks books={this.state.books} /> */}
        <SavedBooks />
      </div>
    );
  }
}

export default App;
