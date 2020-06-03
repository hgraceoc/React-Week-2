
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../Ajax/axios";

import Tag from "./Tag";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],

        }
    }

    componentDidMount() {
        let { id } = this.props;

        axios.get(`/articles/${id}/comments`).then(({ data }) => {
            this.setState({
                loaded: true,
                comments: data.data,
            });
        }) 
    }


    render() {
        let { comments, loaded } = this.state;
        

        return !loaded ? <p>Loading..</p> : (
            <>
            <h2>Comments</h2>
            <ul className="list-group">
                { comments.map(comment => (
                <li className="list-group-item" 
                key={ comment.id }>
                    <p>{ comment.email }</p>
                    <p>{ comment.comment }</p>
                    </li>
                ))}
            </ul>
            </>

        )
    }
}

export default Comments;