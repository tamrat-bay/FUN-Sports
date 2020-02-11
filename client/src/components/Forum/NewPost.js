import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class NewPost extends Component {


    render() {
      this.props.post.subject = '';
      this.props.post.img = '';
      this.props.post.name = localStorage.name;
      this.props.post.userImage = localStorage.image;
      this.props.post.email = localStorage.email;
      this.props.post.comments = [];
      console.log(this.props.post,' Inside new post');
      
        return (
            <div className="post">
            <Form onSubmit={e => {e.preventDefault(); this.props.newPost()}}>
              
               <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Topic</Form.Label>
                      <Form.Control as="select"  defaultValue ="Choose" required onChange={e => (this.props.post.subject = e.target.value)}>
                      <option disabled value="Choose" >Choose</option>
                        <option>Football</option>
                        <option>UFC</option>
                        <option >NBA</option>
                      </Form.Control>
                    </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image <i className="fa fa-image"></i> </Form.Label>
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

                <Button type="submit" >Add Post</Button>

                <Button onClick={() => {this.props.cancel()}}>Cancel </Button>
              </Form.Group>
            </Form>
          </div>
        )
    }
}
