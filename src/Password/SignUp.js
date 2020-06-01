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
    }
    

    render() {
        let valid = this.state.password.length >= this.props.minimumLength && this.state.password === this.state.confirm;
        //set validation rules in the render method, so that the password can be re-used more easily


        return (
            <Form>
                <Password 
                label for="Password"
                value={ this.state.password }
                valid={ valid }
                handleChange={ (e) => {
                    this.setState({ password: e.currentTarget.value })
                }}
                />
                <Password 
                label for="Confirm Password"
                value={ this.state.confirm }
                valid={ valid }
                handleChange={ (e) => {
                    this.setState({ confirm: e.currentTarget.value })
                }}
                />
            </Form>
        )
    }
}


export default SignUp;
