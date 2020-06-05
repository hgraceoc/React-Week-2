import React, { useReducer } from "react";

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

let initialState = {
    celsius: 0,
    farenheit: 0,
};


const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CEL": return {
            ...state,
            celsius: (action.value),
            farenheit: (action.value *9/5+32)
        };

        case "INPUT_FAR": return {
            ...state,
            farenheit: (action.value),
            celsius: ((action.value-32)/9*5)
        };

    };
}



const TempReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
        <h2>Temp Converter</h2>
            <Form>
            <Form.Group>
                <Form.Label>Celsius</Form.Label>
                    <Form.Control
                        onChange={ (e) => dispatch({type: "INPUT_CEL", value: +e.currentTarget.value}) }
                        value={ state.celsius }
                        type="number"/>

                <Form.Label>Farenheit</Form.Label>
                    <Form.Control
                        onChange={ (e) => dispatch({type: "INPUT_FAR", value: +e.currentTarget.value}) }
                        value={ state.farenheit }
                        type="number"/>
            </Form.Group>
            </Form>
        </>
    )
}


export default TempReducer;