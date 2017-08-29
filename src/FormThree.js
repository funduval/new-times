import React from 'react'; 


const FormThree = props => 
  
     <input
              value={props.value}
              name="end"
              onChange={props.handleInputChange}
              type="text"
              placeholder="To (YYYYMMDD)"
            />
     

export default FormThree;
