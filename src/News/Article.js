import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../Ajax/axios";

import Tag from "./Tag";

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: null,

        }
    }

    componentDidMount() {
        let { id } = this.props;
        axios.get(`/articles/${id}`).then(({ data }) => {
            this.setState({
                loaded: true,
                article: data.data,
            });
        }) 
    }


    render() {
        let { article, loaded } = this.state;
        

        return !loaded ? <p>Loading..</p> : (
            <>
            <div className="d-flex flex-column align-items-center p-4">
                <h2>{ article.title }</h2>
                <p>{ article.content }</p>
                <Tag tags={ article.tags }/>
            </div>
            </>

        )
    }
}

export default Article;