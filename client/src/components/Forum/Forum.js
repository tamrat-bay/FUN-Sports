import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./Forum.css";
import NewPost from "./NewPost";
import NewComment from "./NewComment";
import UpdatePost from "./UpdatePost";
import { Link } from "react-router-dom";
import DropdownDeleteUpdate from "./DropdownDeleteUpdate";


class Forum extends Component {
  state = {
    posts: [],
    postFlag: false,
    updateFlag: false
  };

  post = { 
    name: localStorage.name,
     subject: "",
     img: '',
     content: "",
     email: localStorage.email,
     id: '',
     userImage:localStorage.image ? localStorage.image : '',
     comments: [],
     date: new Date().toDateString()
     };

  newPost = () => {
    console.log(this.post,'Post to server');
    
    const AuthStr = "Bearer " + localStorage.token;
    axios.post("/posts", this.post, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 201) {
          let tmp = [...this.state.posts]; // array of all the post
          tmp.push(res.data); // current user detail & comment
          this.setState({ posts: tmp , postFlag:false});
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
    this.post = this.state.posts[index];

    axios.put(`/posts/${id}`, this.post, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 200) {
          let temp = [...this.state.posts];
          temp[index] = this.post;
          this.setState({ posts: temp, updateFlag: false });
          this.post={};
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
if (localStorage.length < 4) { console.log(localStorage.length);
  return <div  className="Forum">
    <div className="Forum_guest">
    <h1 >This page is saved for members only</h1>
    <h1 >Please Signup or Login to join our community</h1>
    <div>
    <Link to="/signup">Signup</Link>
    <Link to="/Login">Login</Link>
    </div>
    </div>
  </div>
}    
    return (
      <div className="Forum">
        {/* <Container> */}
          <div className="Forum_forum">
            <h1>Fun - Sports</h1>

            <div  className="Forum_writePost">
              <button onClick={() => this.setState({ postFlag: true })}>Start Post</button>
            </div> 

            {this.state.postFlag ? (<NewPost newPost={this.newPost} post={this.post} 
             cancel={() => this.setState({postFlag:false})} />
            ) : ("")}
            {this.state.updateFlag ? (<UpdatePost updatePost={this.updatePost} post={this.post}
             cancel={() => this.setState({updateFlag: false})} />
            ) : ("")}
            <div className="Forum_posts">
              {this.state.posts.map((p, i) => (
                <div className="Forum_posts_singlePost" key={i}>

                  <div className="Forum_posts_userImage">

                    {p.userImage ? <img  src={p.userImage} alt=" user"/> :
                     <img src="img/imagelessuser.png" alt=" user"/> }               
                    <h4>{p.name}</h4>
                    </div>          

                    {p.email === localStorage.email ? (  
                     <DropdownDeleteUpdate updateHandler={() =>
                       {this.setState({ updateFlag: true });
                        this.post = this.state.posts[i]; // wanted current comment
                        this.post.index = i;}} 
                        deleteHandler={() =>
                       {this.deletePost(p._id, i);}}/>
                   )
                  : (
                      ""
                    )}

                   <h4>{p.subject}</h4>
                    {p.img ? <img src={p.img} alt="img" /> : ''}
                    <p className="content">{p.content}</p>
                    <div className="commentsDisplay">
                    {p.comments.length > 0 ? p.comments.map((c, j) =>
                      <div key={j} className="singleComment" >

                        <div className="singleComment_user">
                          {c.image ? <img className="commnetatorImage" src={c.image} alt="img"/>
                          : <img className="commnetatorImage" src="img/imagelessuser.png" alt=" user"/>} 
                          {c.comentor} 
                        </div>
                        <p>{c.body}</p>
                        {c.id === localStorage.id ?  <div className="deleteCommnet"> <i className="fa fa-trash" onClick={() =>{
                          this.post = this.state.posts[i];                       
                          this.post.index = i; this.deleteComment(j)
                          }}> 
                          </i>
                            <img className="commentsIcon" src="/favicon.ico"  alt="Fun"/>
                          </div>: 
                          <div><img className="commentsIcon" src="/favicon.ico"  alt="Fun"/></div>  }     
                                   
                      </div>
                      ) :
                       ''}
                  </div>
                  <NewComment post={{...this.state.posts[i]}} index={i} updatePost={this.updatePost} />
                </div>
              ))}
            </div>
          </div>
        {/* </Container> */}
      </div>
    );
  }

  componentDidMount() {
    const AuthStr = "Bearer " + localStorage.token;
    axios.get("/posts", { headers: { Authorization: AuthStr } })
      .then(res => {
        this.setState({ posts: res.data  });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Forum;
