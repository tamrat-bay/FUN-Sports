import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class NewPost extends Component {

    // props.post = { name: localStorage.name, subject: "", content: "" ,email:localStorage.email};

    render() {
      console.log(this.props, 'this.props');
      
        return (
            <div className="post">
            <Form onSubmit={e => e.preventDefault()}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.subject = e.target.value)}
                  type="text"
                  required min="2"
                  placeholder="UFC 246 / LAL vs "
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.img = e.target.value)}
                  type="text"
                  placeholder="url "
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contenet</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.content = e.target.value)}
                  as="textarea" required min="5"
                  rows="3"
                />

                <Button
                  type="submit"
                  href="/Main"
                  onClick={() => {
                    this.props.newPost()}}
                >
                  Add Post
                </Button>
                <Button
                  onClick={() => {
                    this.props.cancel()}}
                >
                  Cancel
                </Button>
              </Form.Group>
            </Form>
          </div>
        )
    }
}
