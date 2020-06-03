import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });

        let { handleSubmit } = this.props;

        handleSubmit(this.state.input);
    
    }

    render() {

        return (
            <form className="form-group p-4">
                <label for="Name">Name</label>
                <input 
                    type="text"
                    value={this.state.input} 
                    onChange={(e) => this.handleChange(e)}/>        
            </form>
        )
    }
}

    export default Form;