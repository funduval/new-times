import React from 'react'; 



const Form = props => 
  
     
        <div className="col-md-12"  id="search">
        <h3>Enter A Search Below</h3>
         <div className="form-group">
          <form className="form" >
            <input 
              onChange={props.handleInputChange}
              value={props.value}
              data-topic={props.topic}
              name="topic"
              type="text"
              placeholder="Topic"
            />
            <br/>
            <h4>Enter a date range:</h4>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              data-start={props.start}
              name="start"
              type="text"
              placeholder="From (YYYYMMDD)"
            />
            <br/>
            <input
              value={props.value}
              onChange={props.handleInputChange}
              data-end={props.end}
              name="end"
              type="text"
              placeholder="To (YYYYMMDD)"
            />
          <br/>
          <br/>
            <button onClick={props.handleFormSubmit}>Submit</button>
          </form>
          <br/>
        </div>
                  
      </div>;
 


export default Form;
