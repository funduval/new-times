import React, { Component } from 'react'; 
 
import './App.css'; 
import Search from './Search.js';
import Results from './Results.js';
import Saved from './Saved.js';





class Main extends Component { 

render() { 

return (

<div className="Main">
  
	   <div className="row"> 

		   
	       <Search /> 
	     

     
        <Results />
     

       </div>

       <div className="row"> 
       
       <Saved />

       </div>

</div>

); 

} 

} 

export { Main as default };