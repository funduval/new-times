import React from 'react'; 



const FormOne = props => 
  
            <input 
              value={props.value}
              name="topic"
              onChange={props.handleInputChange}
              type="text"
              placeholder="Topic"
            />
            


export default FormOne;
