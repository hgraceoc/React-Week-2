import React, { useReducer } from "react";

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

let initialState = {
    celsius: 0,
    farenheit: 0,
};

let action = { type: "" };

const reducer = (state, action) => {
    switch (action.type) {
        case "CONVERT_TO_FAR": return {
            ...state,
            celsius: (state.celsius *9/5+32),
        };

        case "CONVERT_TO_CEL": return {
            ...state,
            farenheit: ((state.farenheit -32)*5/9),
        };

    };
}

let newState = reducer(initialState, action);


const TempReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
        <h2>Temp Reducer</h2>
            <Form>
            <Form.Group>
                <Form.Label>C</Form.Label>
                    <Form.Control
                        input onChange={ () => dispatch({type: "CONVERT_TO_FAR", initialState}) }
                        value={ state.celsius }
                        type="text">
                        { state.celsius}
                    </Form.Control>
            </Form.Group>
            </Form>
        </>
    )
}


export default TempReducer;