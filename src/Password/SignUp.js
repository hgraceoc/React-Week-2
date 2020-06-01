import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Password from "./Password"


import React, { Component} from "react";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            password: "",
            confirm: ""
        }

            this.handleChange = this.handleChange.bind(this);

        }

        handleChange(e) {
            this.setState({ input: e.currentTarget.value });
        }
    

    backgroundColour() {
        let style;
        let length = this.state.confirm.length;
        if (length < 12) {
            return style = {borderColor:"red"}
        }}

    render() {

        
        return (
            <Form>
                <Password 
                label for="Password"
                value={ this.state.password }
                handleChange={ (e) => {
                    this.setState({ password: e.currentTarget.value })
                }}
                />
                  
                <Password 
                label for="Confirm Password"
                value={ this.state.confirm }
                style={this.backgroundColour()}
                handleChange={ (e) => {
                    this.setState({ confirm: e.currentTarget.value })
                }}
                />

              
            </Form>
        )
    }
}
//input password X 2
//pass them props - value, label, error, handleClick

//set up constructor
//set up state - confirmation & value

// this.state.password
// this.state.confirmation

//different event handlers for each state 

//are password and confimration in state the same and are they longer than limit 
//if all true, no error




export default SignUp;
