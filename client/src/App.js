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
        {/* <AllBooks books={this.state.books} /> */}
        <SavedBooks />
      </div>
    );
  }
}

export default App;
