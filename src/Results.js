import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Results = props =>



    <div className="well" id="resultWell">

    <ul>

    {//glyphicon glyphicon-folder-open
    }
    <li>
    <div className="panel panel-default">
          <div className="panel-body">
          {props.article1}<br/><br/>
            <a href={props.link1}>Read the full article.</a>
             <button className="btn btn-primary form-control" >
      Save Article
      <span className="pull-right">
        <span className="glyphicon glyphicon-folder-open">
        </span>
      </span>
    </button>       
          </div>
    </div>
    </li>
    <li>
    <div className="panel panel-default">
          <div className="panel-body">
          {props.article2}<br/><br/>
            <a href={props.link2}>Read the full article.</a>
             <button className="btn btn-primary form-control" >
      Save Article
      <span className="pull-right">
        <span className="glyphicon glyphicon-folder-open">
        </span>
      </span>
    </button>       
          </div>
    </div>
    </li>
     <li>
    <div className="panel panel-default">
          <div className="panel-body">
          {props.article3}<br/><br/>
            <a href={props.link3}>Read the full article.</a>
             <button className="btn btn-primary form-control" >
      Save Article
      <span className="pull-right">
        <span className="glyphicon glyphicon-folder-open">
        </span>
      </span>
    </button>       
          </div>
    </div>
    </li>
    <li>
    <div className="panel panel-default">
          <div className="panel-body" >
          {props.article4}<br/><br/>
            <a href={props.link4}>Read the full article.</a>
             <button className="btn btn-primary form-control" >
      Save Article
      <span className="pull-right">
        <span className="glyphicon glyphicon-folder-open">
        </span>
      </span>
    </button>       
          </div>
    </div>
    </li>
     <li>
    <div className="panel panel-default">
          <div className="panel-body">
          {props.article5}<br/><br/>
            <a href={props.link2}>Read the full article.</a>
             <button className="btn btn-primary form-control" >
      Save Article
      <span className="pull-right">
        <span className="glyphicon glyphicon-folder-open">
        </span>
      </span>
    </button>       
          </div>
    </div>
    </li>
    <li>
    <div className="panel panel-default">
          <div className="panel-body">
          {props.article5}<br/><br/>
            <a href={props.link2}>Read the full article.</a>
             <button className="btn btn-primary form-control" >
      Save Article
      <span className="pull-right">
        <span className="glyphicon glyphicon-folder-open">
        </span>
      </span>
    </button>       
          </div>
    </div>
    </li> 
    </ul>
        
  
    </div>
  

export default Results;