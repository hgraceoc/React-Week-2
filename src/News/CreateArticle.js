import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import axios from "../Ajax/axios";

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",

            saved: false,

        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleContent(e) {
        this.setState({ content: e.currentTarget.value });
    }

    handleTags(e) {
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let currentState = { ...this.state };
        //making a copy of the state 

        let { title, content, tags } = this.state;
        //turn the tags into an array

        let success = () => {
            this.setState({
                saved: true,
                title: "",
                content: "",
                tags: "",
            });
        };

        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags.split(", "),
        }).then(success);
    }


    render() {
        let { saved, title, content, tags } = this.state;


        return (
            <>
                {saved ? <p className="alert alert-info">Saved!</p> : null}

                <div className="centered">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                onSubmit={this.handleSubmit}
                                onChange={this.handleTitle}
                                label="Title"
                                type="text"
                                placeholder="Title Here"
                                name="Title"
                                id="title"
                                value={title}>
                                </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                onChange={this.handleContent} 
                                type="textarea"
                                placeholder="Content"
                                name="Content"
                                id="content"
                                value={content}
                                />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control
                                onChange={this.handleTags} 
                                type="textarea"
                                placeholder="Tags"
                                name="Tags"
                                id="tags"
                                value={tags}
                                />
                        </Form.Group>

                        <Button type="submit">
                            Save Me!
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}



export default CreateArticle;