import axios from "axios";




const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "c008aa3f9a00476097b90b51895f62a9";




export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);


  }
};

// test quesry string  ==== https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c008aa3f9a00476097b90b51895f62a9&q= armenia&begin_date=19191010&end_date=19301212&fl=headline%2C,web_url%2C

