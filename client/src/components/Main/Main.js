import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./Main.css";
// import MainCarusel from "./MainCarusel";
import NewPost from "./NewPost";
import NewComment from "./NewComment";
import UpdatePost from "./UpdatePost";
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


class Main extends Component {
  state = {
    posts: [],
    postFlag: false,
    updateFlag: false
  };

  post = { name:localStorage.name,
     subject: "",
     img: '',
     content: "",
     email: localStorage.email,
     id: '',
     comments: [],
     date: new Date().toDateString()
     };

  newPost = () => {
    this.post.date = new Date().toDateString();
    const AuthStr = "Bearer " + localStorage.token;
    axios.post("/posts", this.post, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 201) {
          let tmp = [...this.state.posts];
          tmp.push(this.post);
          this.setState({ posts: tmp });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  deletePost = (id, index) => {
    this.post.date = new Date().toDateString();
    const AuthStr = "Bearer " + localStorage.token;
    axios.delete(`/posts/${id}`, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 200) {
          let temp = [...this.state.posts];
          temp.splice(index, 1);
          this.setState({ posts: temp });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  updatePost = (id, index) => {
    const AuthStr = "Bearer " + localStorage.token;
    this.post = this.state.posts[index]
    axios.put(`/posts/${id}`, this.post, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 200) {
          let temp = [...this.state.posts];
          temp[index] = this.post;
          this.setState({ posts: temp, updateFlag: false });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteComment = (commentIndex) => {
    const AuthStr = "Bearer " + localStorage.token;
    this.post.comments.splice(commentIndex, 1);
    axios.put(`/posts/${this.post._id}`, this.post, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 200) {
          let temp = [...this.state.posts];
          temp[this.post.index] = this.post;
          this.setState({ posts: temp });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Main">
        <Container>
          <div className="Main_forum">
            <h1>Fun - Forum</h1>
            <button onClick={() =>this.setState({ postFlag: true })}>
             New Post
             </button> 

            {this.state.postFlag ? (<NewPost newPost={this.newPost} post={this.post} 
             cancel={() => this.setState({postFlag:false})} />
            ) : (
                ""
              )}
            {this.state.updateFlag ? (<UpdatePost updatePost={this.updatePost} post={this.post}
             cancel={() => this.setState({updateFlag: false})} />
            ) : (
                ""
              )}
            <div className="Main_posts">
              {this.state.posts.map((p, i) => (
                <div className="Main_posts_singlePost" key={i}>
                  <h2>User : {p.name}</h2>
                  <h4>{p.subject}</h4>
                  {p.img ? <img src={p.img} alt="img" /> : ''}
                  <p>{p.content}</p>
                  {p.email === localStorage.email ? (
                    <div>
                      <button onClick={() => {this.deletePost(p._id, i);}}>
                        Delete
                      </button>
                      <button onClick={() => {
                        this.setState({ updateFlag: true });
                        this.post = this.state.posts[i];
                        this.post.index = i;
                       }}>
                        Update
                        </button>
                    </div>
                  ) : (
                      ""
                    )}
                  <div className="commentsDisplay">
                    {p.comments.length > 0 ? p.comments.map((c, j) =>
                      <span key={j} >Commentator  : {c.comentor} <p>{c.body} </p>
                        {c.id === localStorage.id ? <button onClick={() =>{
                          this.post = this.state.posts[i];                       
                          this.post.index = i; this.deleteComment(j)
                          }}>Delete Comment</button> : ''}                 
                      </span>) : ''}
                  </div>
                  {/* {this.post = this.state.posts[i]} */}
                  <NewComment post={this.post = this.state.posts[i]} index={i} updatePost={this.updatePost} />
                  {/* <Accordion>
                  // this.post this.state.posts[i] , this,updatePost(_id , index)

                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} className="comments" variant="link" eventKey="0">
                          Add Comment <i className="fa fa-comments"></i>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <input type="text" onChange={(e) => { this.singleComment.comment = e.target.value; }}></input>
                          <button onClick={() => {
                            this.post = this.state.posts[i]
                            this.post.comments.push({
                              comentor: localStorage.name, body: this.singleComment.comment,
                              date: new Date().toDateString(), id: localStorage.id
                            });
                            this.updatePost(p._id, i)
                          }}>Add
                                </button>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion> */}
                </div>
              ))}
            </div>
          </div>
          {/* <MainCarusel /> */}
        </Container>
      </div>
    );
  }

  componentDidMount() {
    const AuthStr = "Bearer " + localStorage.token;
    axios
      .get("/posts", { headers: { Authorization: AuthStr } })
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Main;
