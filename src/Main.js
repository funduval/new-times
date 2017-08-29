import React, { Component } from 'react'; 
 
import './App.css'; 
import Form from './Form.js';
import Results from './Results.js'
import Saved from './Saved.js';
import API from './API.js'

class Main extends Component { 


state = {
    topic: "",
    start:"",
    end:"",
    result:{}
  };

  searchArticles = query => {
    API.search(this.topic, this.start, this.end)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //validation checks are best put inside the click/submit istener

var patt = new RegExp(/^(?:(?:(?:(?:(?:[1-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:[2468][048]|[13579][26])00))(||)(?:0?2\1(?:29)))|(?:(?:[1-9]\d{3})(||)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[13-9]|1[0-2])\2(?:29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8])))))$/);


if(this.state.topic === ""){


alert("No topic was entered")


}
else if (patt.test(this.state.start)===false || patt.test(this.state.end)===false){

  alert ("Please enter dates in YYYYMMDD format")

}
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
 else{  

    this.searchArticles(this.state.topic, this.state.start, this.state.end);

  alert(`Searching articles about ${this.state.topic}`);
}

    this.setState({
      topic: "",
      start: "",
      end:"",
      result:{}
    });

  };


render() { 

return ( 

<div className="container">

	<div className="row"> 

		<div className="col-md-3" id="formArea">
			  	<Form
		        value={this.state.value}
		        handleInputChange={this.handleInputChange}
		        handleFormSubmit={this.handleFormSubmit}
		              />
		</div>
		  
		<div className="col-md-9">

				<Results
				link={this.state.result}
				    />

		</div>
					       
	</div>



	     <Saved /> 


    	
    </div>


 
) 

} 

} 

export { Main as default }; 