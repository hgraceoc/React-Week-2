import React, { Component } from "react";

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

import axios from "../Ajax/axios";

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",

            saved: false,

        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleComment(e) {
        this.setState({ comment: e.currentTarget.value });

    }

    handleSubmit(e) {
        e.preventDefault();

        let { comment, email } = this.state;
        let { id } = this.props;

        let success = () => {
            this.setState({
                saved: true,
                comment: "",
                email: "",
            });
        };

    axios.post(`/articles/${id}/comments`, {
        saved: false,
        comment: comment,
        email: email,
    }).then(success);
}


render() {
    let { saved, email, comment } = this.state;

    return (
        <>
        { saved ? <p className="alert alert-info">Saved!</p> : null}
            <div className="centered">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            input onChange={this.handleEmail}
                            name="Title"
                            id="title"
                            value={ email }
                            className="m-2"
                        />
                    </Form.Group>
                    <Form.Control
                            type="text"
                            placeholder="Comment"
                            input onChange={this.handleComment}
                            name="Comment"
                            id="comment"
                            value={ comment }
                            className="m-2"
                        />
                   
                    <Button className="m-2"
                        type="submit">
                        Add Comment!
                    </Button>
                </Form>
            </div>
        </>
    )
}
}



export default CreateComment;