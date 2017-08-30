import React, { Component } from 'react'; 
 
import './App.css'; 
import Form from './Form.js'
// import FormOne from './FormOne.js';
// import FormTwo from './FormTwo.js';
// import FormThree from './FormThree.js';
import Results from './Results.js'
import Saved from './Saved.js';
import API from './API.js'

class Main extends Component { 


state = {
    topic: "Armenia",
    start:"19191212",
    end:"19301212",
    search: "",
    result:{}
  };

 componentDidMount() {
    this.searchArticles("&q=politics&begin_date=20170105&end_date=20170828&fl=headline%2C,web_url%2C");
  }
  

  searchArticles = () => {

  	const currQuery = "&q=" + this.state.topic + "&begin_date=" + this.state.start+ "&end_date=" + this.state.end + "&fl=headline%2C,web_url%2C"

  	// query = "&q=" + this.state.topic + "&begin_date=" + this.state.start+ "&end_date=" + this.state.end + "&fl=headline%2C,web_url%2C"

    console.log(currQuery)

    API.search(currQuery)
      .then(res => {
        this.setState({ result: res.data.response.docs})
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // const data = event.target.data
   
  


    // Updating the input's state
    this.setState({
      [name]: value,
      // [data]: value,
     
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
 	
   

    this.searchArticles(this.state.search);

  alert(`Searching articles about ${this.state.topic}`);
}

    this.setState({
      topic: "",
      start: "",
      end:"",
      search:"",
      result:{}
    });

  };


render() { 
  console.log(this.state);
return (


<div className="container">

	<div className="row"> 

	 

					  	<Form
						value={this.state.value}
					  	// value={this.state.search}
				        handleInputChange={this.handleInputChange}
				        handleFormSubmit={this.handleFormSubmit}
				       topic={this.state.topic}
				       start={this.state.start}
				      end={this.state.end}
				      
				              />
				       

	</div>
		  
		<div className="row">

				<Results
				articles={this.state.result.headline}
				    />
		</div>

		<div className="row">				       

	    	 <Saved /> 

	     </div>
</div>
 
) 

} 

} 

export { Main as default }; 