import React from "react";
import API from "./utils/Api";

import "./App.css";

import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    isLoading: true,
    search: "",
    books: [],
  };

  componentDidMount() {
    API.getBooks().then((res) => {
      this.setState({
        books: res.data.items,

        isLoading: false,
      });

      console.log(this.state.books);
    });
  }
  render() {
    return this.state.books.map((book) => (
      <div className="App">
        <Navbar />
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors}</h4>
        <p>Description : {book.volumeInfo.description}</p>
        <img
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
        />
        <br />
        <a href={book.volumeInfo.previewLink}>Book preview</a>
      </div>
    ));
  }
}

export default App;
