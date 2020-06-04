import React, { useState } from "react";

import Button from 'react-bootstrap/Button'

const StepCountHooks = ({ max, step }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + step);
    const handleMinus = () => setCounter(counter - (counter > 0 ? step : 0));

    return (
        <>
            <h2>Step Counter Hooks!</h2>
            <Button className="m-2" onClick={handleClick}>+</Button>
            <Button className="m-2" onClick={handleMinus}>-</Button>
            <p>{counter}</p>
    
        </>
    );
};


StepCountHooks.defaultProps = {
    max: 100,
    step: 5
}
export default StepCountHooks;