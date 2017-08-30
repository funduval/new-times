import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Results = props =>



    <div className="well" id="resultWell">

    <ul>

    <li>{props.article1}<br/>
    <a href={props.link1}>Read the full article.</a></li>
    <br/>
    <br/>
    <li>{props.article2}<br/>
    <a href={props.link2}>Read the full article.</a></li>
    <br/>
    <br/>
      <li>{props.article3}<br/>
    <a href={props.link3}>Read the full article.</a></li>
    <br/>
    <br/>
      <li>{props.article4}<br/>
    <a href={props.link4}>Read the full article.</a></li>
    <br/>
    <br/>
      <li>{props.article5}<br/>
    <a href={props.link5}>Read the full article.</a></li>
   
    </ul>
        
  
    </div>
  

export default Results;