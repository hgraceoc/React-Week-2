import React, { useState } from "react";


const SquareHooks = ({ colour }) => {
    const [selected, setSelected] = useState(false);


    const handleClick = () => setSelected(!selected);

    return (
        <>
            <h2>Square Under Them There Hooks</h2>
            <div
                onClick={handleClick}
                style={{
                    height: 100,
                    width: 100,
                    background: selected ? colour : "green",
                }}>
            </div>
        </>


    );
};

SquareHooks.defaultProps = {
    colour: "pink"
}

export default SquareHooks;