import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class UpdatePost extends Component {

    // props.post = { name: localStorage.name, subject: "", content: "" ,email:localStorage.email};

    render() {
        return (
            <div className="post">
                <h3>Update Post</h3>
            <Form onSubmit={e => e.preventDefault()}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.subject = e.target.value)}
                  type="text"
                  placeholder="UFC 246 / LAL vs "
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contenet</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.content = e.target.value)}
                  as="textarea"
                  rows="3"
                />

                <Button
                  type="submit"
                //   href="/Main"
                  onClick={() => {
                    this.props.updatePost(this.props.post.id,this.props.post.index)}}
                >
                  Add Post
                </Button>
              </Form.Group>
            </Form>
          </div>
        )
    }
}