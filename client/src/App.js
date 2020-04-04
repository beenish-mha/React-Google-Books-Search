import React from "react";
import API from "./utils/Api";

import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    search: "",
    books: [],
    title: "",
    authors: [],
    description: "",
    imgLink: "",
    previewLink: "",
  };

  componentDidMount() {
    API.getBooks().then((res) => {
      this.setState({
        books: res.data.items,

        isLoading: false,
        title: res.data.items[0].volumeInfo.title,
        authors: res.data.items[0].volumeInfo.authors,
        description: res.data.items[0].volumeInfo.description,
        imgLink: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
        previewLink: res.data.items[0].volumeInfo.previewLink,
      });

      console.log(this.state.books);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Google Books!</h1>
        <h2>{this.state.title}</h2>
        <p>{this.state.authors}</p>
        <p>{this.state.description}</p>
        <img src={this.state.imgLink} alt={this.state.title} />
        <a href={this.state.previewLink}>Book preview</a>
      </div>
    );
  }
}

export default App;
