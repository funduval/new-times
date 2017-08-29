import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Results = props =>

<div className= "col-md-12" id="results">

    <p>

    Here are the Results: {props.results}

    </p>
   
   

  </div>;

export default Results;