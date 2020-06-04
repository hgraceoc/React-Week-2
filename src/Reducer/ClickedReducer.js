import React, { useReducer } from "react";

let initialState = {
    clicked: false,
};

let action = { type: "CLICKED" };

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED": return {
            ...state,
            clicked: true,
        };
}


let newState = reducer(initialState, action);
}

const ClickedReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
        <h2>Clicked</h2>
        <p 
        onClick={ () => dispatch(action) }>{state.clicked ? "Clicked" : "Not Clicked"}
        </p>
        </>
    )
}


export default ClickedReducer;