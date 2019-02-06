import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getSummoner: function(name) {
    return axios.get("/api/summoner/"+name);
  },
  addSummoner: function(name,sumInfo) {
    return axios.post("/api/summoner/"+name,sumInfo);
  },
  findSummoner: function(name) {
    return axios.get("/api/find/"+name);
  }
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // }
};
