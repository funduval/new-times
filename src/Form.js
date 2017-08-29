import React from 'react'; 



const Form = props => 
  
      <div className="form-group">
        <div className="col-md-12"  id="search">
        <h3>Enter A Search Below</h3>
          <form className="form" >
            <input 
              value={props.value}
              name="topic"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Topic"
            />
            <br/>
            <h4>Enter a date range:</h4>
            <input
              value={props.value}
              name="start"
              onChange={props.handleInputChange}
              type="text"
              placeholder="From (YYYYMMDD)"
            />
            <br/>
            <input
              value={props.value}
              name="end"
              onChange={props.handleInputChange}
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
