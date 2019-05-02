import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
export default {
  // Gets all books
  getAll: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given title
  search: function(query) {
    return axios.get(URL + query);
  },
  // Deletes the book with the given id
  delete: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  save: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
