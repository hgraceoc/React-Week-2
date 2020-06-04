import React, { useState } from "react";

import Button from 'react-bootstrap/Button'

const CounterHooks = ({ max }) => {
    const [counter, setCounter] = useState(50);

    const handleClick = () => setCounter(counter + 1);
    const handleMinus = () => setCounter(counter - (counter < max ? 1 : 0));

    return (
        <>
            <h2>Counter Hooks!</h2>
            <Button className="m-2" onClick={handleClick}>+</Button>
            <Button className="m-2" onClick={handleMinus}>-</Button>
            <p>{counter}</p>
    
        </>
    );
};


CounterHooks.defaultProps = {
    max: 100
}
export default CounterHooks;