import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Results = props =>

<div className= "col-md-12" id="results">

    <p>

    Here are the Results: {props.web_url}
    Link: {props.headline}

    </p>
   
   

  </div>;

export default Results;