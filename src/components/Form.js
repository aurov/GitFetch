import React from "react";

const Form = props => (
  <form onSubmit={props.getGit}>
    <input type="text" name="login" className="main__input" placeholder="Enter a username..."/>
    <button className="btn-y btn-y--shallow">Search</button>
  </form>
);
export default Form;