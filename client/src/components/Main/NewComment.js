import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class NewComment extends Component {

    singleComment = { comment: '' }
    render() {
        // console.log(this.props.post);
        // console.log(this.props.post,'New Comment postData');

        return (
            <div className="NewComment">
                 <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} className="comments" variant="link" eventKey="0">
                          Add Comment <i className="fa fa-comments"></i>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <input type="text" placeholder="Add a comment..." onChange={(e) =>{ this.singleComment.comment = e.target.value; }}></input>
                          <button onClick={() => {
                            this.props.post.comments.push({
                              comentor: localStorage.name,
                              body: this.singleComment.comment,
                              date: new Date().toDateString(), 
                              id: localStorage.id,image:localStorage.image
                            });
                            this.props.updatePost(this.props.post._id, this.props.index)
                            // console.log(this.props.post);
                            // console.log(this.props.index);
                            
                          }}>Post
                                </button>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
            </div>
        )
    }
}
