import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getSummoner: function(name) {
    return axios.get("/api/summoner/"+name);
  },
  addSummoner: function(name,sumInfo) {
    return axios.post("/api/summoner/"+name,sumInfo);
  }
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // }
};
