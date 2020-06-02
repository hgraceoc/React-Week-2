import React, { Component } from "react";

const Square = ({ selected, handleClick, colour }) => (
    <div 
    onClick={ handleClick }
    className="m-4"
    style={{
        height: 100,
        width: 100,
        background: selected ? colour : "green",
    }}>
    </div>
)

//passing the default colour in via app.js
  
export default Square;




