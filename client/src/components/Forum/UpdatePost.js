import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class UpdatePost extends Component {
    render() {
        console.log(this.props.post);
        
        return (
            <div className="UpdatePost">
                <h3>Update Post</h3>
            <Form onSubmit={e => e.preventDefault()}>

            <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Topic</Form.Label>
                      <Form.Control as="select"  defaultValue = {this.props.post.subject }required onChange={e => (this.props.post.subject = e.target.value)}>
                      <option disabled value="Choose" >Choose</option>
                        <option>Football</option>
                        <option>UFC</option>
                        <option >NBA</option>
                      </Form.Control>
                    </Form.Group>
                    
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.img = e.target.value)}
                  type="text" defaultValue={this.props.post.img}
                  placeholder="url "
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contenet</Form.Label>
                <Form.Control
                  onChange={e => (this.props.post.content = e.target.value)}
                  as="textarea" defaultValue={this.props.post.content}
                  rows="3" required min="4"
                />

                <Button
                  type="submit"
                  onClick={() => {
                    this.props.updatePost(this.props.post._id,this.props.post.index)}}
                >
                  Change post
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
