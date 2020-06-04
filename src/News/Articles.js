import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../Ajax/axios";

import Tag from "./Tag";

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {
        //loads articles from API
        //runs only once after first render
        axios.get('/articles').then(({ data }) => {
            this.setState({
                loaded: true,
                articles: data.data,
                //gives us back a data object
                //loaded to true to keep track of the fact it has in fact loaded
                //articles array updated to include the data from the get request
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
                            <Link to={ `/news/${ article.id }` }>{ article.title }</Link>
                            <p className="tags d-flex flex-end">
                            <Tag tags={ article.tags }/>
                            </p>

                        </li>
                    ))}
                </ul>
            </>

        )
    }
}

export default Articles;