import axios from "axios";



const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "c008aa3f9a00476097b90b51895f62a9";


//api.nytimes.com/svc/search/v1/article?format=json&query=title%3A%22Letter+by+Letter%22+&fields=byline%2C+date%2C+title%2C+url%2C+org_facet%2C+geo_facet&api-key=####

export default {
  search: function(topic, start, end) {
    return axios.get(BASEURL + APIKEY + "&q=" + topic + "&begin_date=" + start+ "&end_date=" + end + "&fl=headline%2C,web_url%2C");


  }
};

