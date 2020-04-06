import axios from "axios";

export default {
  getBooks: function (q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q);
  },
  getDBBooks: function () {
    return axios.get("/api/book");
  },
  saveBook: function (bookData) {
    return axios.post("/api/book", bookData);
  },
};
