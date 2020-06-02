import React, { Component } from "react";

const Password = ({ label, value, valid, handleChange, }) => (
    <div>
        <input
        className="form-control"
        onChange={ handleChange }
        type="password"
        value={ value }
        style={{ borderColor: valid ? "" : "red" }}
        />
        <label for = { label }></label>
    </div>
    
)

export default Password;
