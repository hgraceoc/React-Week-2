import React, { Component } from "react";

const Square = ({ selected, handleClick, colour }) => (
    <div 
    onClick={ handleClick }
    style={{
        height: 100,
        width: 100,
        background: selected ? colour : "green",
    }}>
    </div>
)
Square.defaultProps = {
      colour: "pink"
    }
  
export default Square;




