import axios from "axios";

export default {
  getBooks: function () {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=harry");
  },
  getDBBooks: function () {
    return axios.get("/api/book");
  },
};
