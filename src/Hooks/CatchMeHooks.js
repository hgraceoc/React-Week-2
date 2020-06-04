import React, { useState } from "react";

import Button from 'react-bootstrap/Button'

const CatchMeHooks = ({ jump }) => {
    const [location, setLocation] = useState(0);

    const handleClick = () => setLocation(location + jump);

    return (
        <>
            <Button 
            className="p-2 p-1 m-4"
            variant="info"
            onClick={ handleClick }
            style = {{position: "absolute", top: location }}>
            Catch Me!
            </Button>
        </>
    );
};


CatchMeHooks.defaultProps = {
    jump: 100,
    
}
export default CatchMeHooks;