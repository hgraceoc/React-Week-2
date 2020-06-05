import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../Ajax/axios";

import Tag from "./Tag";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: null,

        }
    }

    componentDidMount() {
        //runs when the component first renders
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
                <Comments id={ article.id}></Comments>
            </div>
                <CreateComment />
            </>

        )
    }
}

export default Article;

//could also have 
// {article.tags.map((tag, index) => (
//     <p>>key={index}
//     {tag}
//     </p>
// ))}