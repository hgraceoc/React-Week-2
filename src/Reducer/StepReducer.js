import React, { useReducer } from "react";

import Button from 'react-bootstrap/Button'

let initialState = {
    step: 0,
};

let action = { type: "STEP" };

const reducer = (state, action) => {
    switch (action.type) {
        case "STEP": return {
            ...state,
            step: state.step + 5,
        };
}


let newState = reducer(initialState, action);
}

const StepReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
        <h2>Step Counter</h2>
        <Button
        onClick={ () => dispatch(action) }>{state.step}
        </Button>
        </>
    )
}


export default StepReducer;