import React from "react";

const Submit = props =>
  <form>
    <div className="form-group">
      <label htmlFor="Submit">Submit:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="Submit"
        type="text"
        className="form-control"
        placeholder="Submit For a Movie"
        id="Submit"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Submit
      </button>
    </div>
  </form>;

export default Submit;
