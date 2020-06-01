import React, { Component } from "react";

const Password = ({ label, value, error, handleChange }) => (
    <div>
        <label for = { label }></label>
        <input
        onChange={ handleChange }
        type="password"
        value={ value }
        />
    </div>
    
)

export default Password;


//label input
//what should it display 
//label prop 
//printed in label html element
//value prop 
//error or not ?
//handelChange prop