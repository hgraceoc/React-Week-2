import React, { Component } from "react";
import Square from "./Square";

class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ selected: !this.state.selected });
    }

    render() {
        let { name } = this.props;

        let { selected } = this.state;
            
            return (
                <>
                <Square
                    selected={ this.state.selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 })}
                    colour={ this.props.colour }
                />
                <Square
                    selected={ this.state.selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 })}
                    colour={ this.props.colour }
                />
            </>
            );
    }
}

Squares.defaultProps = {
    colour: "pink" 
  }



export default Squares;  