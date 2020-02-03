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

  post = { name: localStorage.name, subject: "", content: "" ,email:localStorage.email,id:''};

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
              <NewPost newPost={this.newPost} post={this.post}/>
            ) : (
              ""
            )}
             {this.state.updateFlag ? (
              <UpdatePost updatePost={this.updatePost} post={this.post}/>
            ) : (
              ""
            )}
                <div className="Main_posts">
                  {this.state.posts.map((p, i) => (
                    <div className="Main_posts_singlePost" key={i}>
                      <h2>User : {p.name}</h2>
                      <h4>{p.subject}</h4>
                      <p>{p.content}</p>
                      {p.email === localStorage.email ? (
                        <div>
                        <button  onClick={() => {
                            this.deletePost(p._id, i); }}>
                          Delete
                        </button>
                          <button  onClick={() => {
                            this.setState({updateFlag:true});
                            this.post.id = p._id;
                            this.post.index = p.index;
                            }}>
                          Update
                        </button>
                        </div>
                      ) : (
                        ""
                      )}
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
