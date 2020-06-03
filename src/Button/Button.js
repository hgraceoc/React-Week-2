import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });

        let { handleUpdate } = this.props;

        handleUpdate(this.state.count);
        
    }

    render() {
        let { count } = this.state;

        return ( 
            <button 
                className="btn btn-info m-4"
                onClick={ this.handleClick }>Click</button>
            ); 
        }
    }

    export default Button;