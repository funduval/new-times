import React, { Component } from 'react'; 

// import Container from "./Container";
import Main from "../Main";

class Form extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    start: "",
    end:""
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

if(this.state.topic == ""){


alert("No topic was entered")


}

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
 else{  

  alert(`Searching ${this.state.topic} `);
}

    this.setState({
      firstName: "",
      lastName: "",
      password:""
    });

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          You are searching for articles on  {this.state.topic} 
        </p>
        <form className="form" >
          <input 
            value={this.state.topic}
            name="topic"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Topic"
          /><br/>
          <input
            value={this.state.start}
            name="start"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Start of Date Range"
          />
          <br/>
          <input
            value={this.state.end}
            name="end"
            onChange={this.handleInputChange}
            type="text"
            placeholder="End of Date Range"
          />
        <br/>
        <br/>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <br/>
      </div>
    );
  }
}

export default Form;
