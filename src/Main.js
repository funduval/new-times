import React, { Component } from 'react';  
import './App.css'; 
import Form from './Form.js'
import Results from './Results.js'
import Saved from './Saved.js';
import API from './API.js'

class Main extends Component { 

state = {
    topic: "Armenia",
    start:"19191212",
    end:"19301212",
    search: "",
    article1:[],
    article2:[],
    article3:[],
    article4:[],
    article5:[],
    link1:[],
    link2:[],
    link3:[],
    link4:[],
    link5:[],
   
   
  };

 componentDidMount() {
    this.searchArticles("&q=politics&begin_date=20170105&end_date=20170828&fl=headline%2C,web_url%2C");
  }

  searchArticles = () => {

    const currQuery = "&q=" + this.state.topic + "&begin_date=" + this.state.start+ "&end_date=" + this.state.end + "&fl=headline%2C,web_url%2C"

    console.log(currQuery)

    API.search(currQuery)
      .then(res => {
        this.setState({ article1:res.data.response.docs[3].headline, link1: res.data.response.docs[3], article2:res.data.response.docs[4].headline, link2: res.data.response.docs[4],  article3:res.data.response.docs[5].headline, link3: res.data.response.docs[5], article4:res.data.response.docs[6].headline,link4: res.data.response.docs[6], article5:res.data.response.docs[7].headline ,link5: res.data.response.docs[7],article6:res.data.response.docs[8].headline ,link6: res.data.response.docs[8] })
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    
    // Updating the input's state
    this.setState({
      [name]: value,
      
    });

  };

  handleFormSubmit = event => {

    //Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //validation checks inside the event istener
var patt = new RegExp(/^(?:(?:(?:(?:(?:[1-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:[2468][048]|[13579][26])00))(||)(?:0?2\1(?:29)))|(?:(?:[1-9]\d{3})(||)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[13-9]|1[0-2])\2(?:29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8])))))$/);

if(this.state.topic === ""){

alert("No topic was entered")

}
else if (patt.test(this.state.start)===false || patt.test(this.state.end)===false){

  alert ("Please enter dates in YYYYMMDD format")

}
   
 else{     

    this.searchArticles(this.state.search);

    alert(`Searching articles about ${this.state.topic}`);
}

    this.setState({
    topic: "",
    start: "",
    end:"",
    search:"",
    article1:[],
    article2:[],
    article3:[],
    article4:[],
    article5:[],
    link1:[],
    link2:[],
    link3:[],
    link4:[],
    link5:[],

    });

  };

render() { 

  var thisObject = this.state.article1
  console.log(thisObject)

  var thisOtherObject = this.state.article2
   console.log(thisOtherObject)



return (

<div className="container">

  <div className="row"> 

              <Form
                value={this.state.value}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                topic={this.state.topic}
                start={this.state.start}
                end={this.state.end}
                      />      
  </div>
      
    <div className="row">
    <div className= "col-md-12" id="results">

        <Results
          article1={this.state.article1.main}
          link1={this.state.link1.web_url}
          article2={this.state.article2.main}
          link2={this.state.link2.web_url}
          article3={this.state.article3.main}
          link3={this.state.link3.web_url}
          article4={this.state.article4.main}
          link4={this.state.link4.web_url}
          article5={this.state.article5.main}
          link5={this.state.link5.web_url}
           
            />

    </div>
    </div>

    <div className="row">              

         <Saved /> 

       </div>
</div>
 
) 

} 

} 

export { Main as default }; 