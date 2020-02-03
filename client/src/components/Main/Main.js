import React, { Component } from "react";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import axios from "axios";
import "./Main.css";
// import MainCarusel from "./MainCarusel";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import NewPost from "./NewPost";
import UpdatePost from "./UpdatePost";


class Main extends Component {
  state = {
    video: "",
    game: "",
    nbagames: [],
    mma: "",
    posts: [],
    postFlag: false,
    updateFlag : false
  };

  post = { name: localStorage.name, subject: "",img:'', content: "" ,email:localStorage.email,id:'',comments:[]};
  singleComment = {comment:''}
  newPost = () => {
    this.post.date = new Date().toDateString();
    const AuthStr = "Bearer " + localStorage.token;
    axios
      .post("/posts", this.post, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (res.status === 201) {
          console.log('addedd');
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
    console.log(id);
    this.post.date = new Date().toDateString();
    const AuthStr = "Bearer " + localStorage.token;
    axios
      .delete(`/posts/${id}`, { headers: { Authorization: AuthStr } })
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
    console.log(id);
    this.post.date = new Date().toDateString();
    const AuthStr = "Bearer " + localStorage.token;
    axios.put(`/posts/${id}`,this.post, { headers: { Authorization: AuthStr } })    
      .then(res => {
        if (res.status === 200) {
          let temp = [...this.state.posts];
          temp[index] = this.post;
          this.setState({ posts: temp,updateFlag:false });
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
            <button
              onClick={() =>
                this.setState({ postFlag: !this.state.postFlag })
              }>
            
              {this.state.postFlag ? "Close Window" : "Post"}
            </button>
            {this.state.postFlag ? (
              <NewPost newPost={this.newPost} post={this.post} cancel={()=>this.setState({postFlag:false})}/>
            ) : (
              ""
            )}
             {this.state.updateFlag ? (
              <UpdatePost updatePost={this.updatePost} post={this.post} cancel={()=>this.setState({updateFlag:false})}/>
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
                        <button  onClick={() => {
                            this.deletePost(p._id, i); }}>
                          Delete
                        </button>
                          <button  onClick={() => {
                            this.setState({updateFlag:true});
                            this.post = this.state.posts[i]
                            // this.post.id = p._id;
                            this.post.index = i;
                            }}>
                          Update
                        </button>
                        </div>
                      ) : (
                        ""
                      )}
                         {p.comments.length > 0 ? p.comments.map((c,i)=>
                         <div key={i} className="commentsDisplay">Comentetor : {c.comentor} <p>{c.body}</p></div>) : ''}
                         <h4>Comments <i className="fa fa-comments"></i></h4>
                        <div className="comments">
                          <input type="text" onChange={(e)=>{this.singleComment.comment = e.target.value;
                          }}></input>
                          <button onClick={()=>{  
                            this.post = this.state.posts[i]
                            // this.post.id = p._id;
                            // this.post.index = i;; 
                        this.post.comments.push({comentor:localStorage.name,body:this.singleComment.comment,date: new Date().toDateString()});
                        this.updatePost(p._id,i)  
                        }
                          }>Comment</button>
                        </div>
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
