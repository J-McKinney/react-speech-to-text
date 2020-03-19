import axios from "axios";

export default {
  // Gets all books
  getSpeeches: function() {
    return axios.get("/api/speeches");
  },
  // Gets the book with the given id
  getSpeech: function(id) {
    return axios.get("/api/speeches/" + id);
  },
  // Deletes the book with the given id
  deleteSpeech: function(id) {
    return axios.delete("/api/speeches/" + id);
  },
  // Saves a book to the database
  saveSpeech: function(speechData) {
    return axios.post("/api/speeches", speechData);
  }
};
