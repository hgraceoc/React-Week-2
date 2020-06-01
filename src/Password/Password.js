import React, { Component } from "react";

const Password = ({ selected, handleClick, colour }) => (
    <div 
    onClick={ handleClick }
    style={{
        height: 100,
        width: 100,
        background: selected ? colour : "green",
    }}>
    </div>
)
Password.defaultProps = {
      colour: "pink"
    }
  
export default Password;