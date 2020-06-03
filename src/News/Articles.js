import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../Ajax/axios";

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {
        axios.get('/articles').then(({ data }) => {
            this.setState({
                loaded: true,
                articles: data.data,
            });
        }) 
    }


    render() {
        let { articles, loaded } = this.state;
        

        return !loaded ? <p>Loading..</p> : (
            <>
                <h2>Articles</h2>
                <ul className="list-group">
                    {articles.map(article => (
                        <li key={article.id}
                        className="list-group-item">

                        </li>
                    ))}
                </ul>
            </>

        )
    }
}

export default Articles;