import React from "react";
import API from "./utils/Api";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AllBooks from "./components/AllBooks";
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
    return (
      <div>
        <Navbar />
        <Header />
        <AllBooks books={this.state.books} />
      </div>
    );
  }
}

export default App;
