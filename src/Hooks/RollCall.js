import React, { useState } from "react";
import Button from 'react-bootstrap/Button'

const RollCall = ({ names }) => {
    const [ index, setIndex ] = useState(0);
    const handleClick = () => setIndex((index + 1) % names.length);

    return (
        <>
        <h2>Who's Next!</h2>
            <Button 
            className="p-2 p-1 m-4"
            variant="info"
            onClick={ handleClick }>
            Next
            </Button>
            <h3>{ names[index] }</h3>
        </>
    );
};


RollCall.defaultProps = {
    names: ['Bill', 'Ben', 'Flower', 'Pot', 'Men']
    
}
export default RollCall;