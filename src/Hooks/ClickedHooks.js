import React, { useState } from "react";


const ClickedHooks = () =>  {
    const [clicked, setClicked] = useState(false);


    const handleClick = () => setClicked(true);

    return (
        <>
        <h2>Clicked</h2>
        <p 
        onClick={ handleClick }>
        { clicked ? "Clicked" : "Not Clicked" }</p>
        </>
    );
};

export default ClickedHooks;