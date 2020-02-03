import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Main.css'
import MainCarusel from './MainCarusel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends Component {
    state = {video: '', game:'', nbagames: [], mma: '',posts:[]}
    commnet = {name:localStorage.name,subject:'',content:''}

newPost = ()=>{
  this.commnet.date = new Date().toDateString();
  const AuthStr = 'Bearer ' + localStorage.token;
  axios.post('/posts',this.commnet,{ 'headers': { 'Authorization': AuthStr } })
  .then((res)=> {
    if (res.status === 201) {
      console.log(res);
      let tmp = [...this.state.posts];
      tmp.push(this.commnet)
      this.setState({posts:tmp})
    }
        
    })
    .catch((error)=> {
        console.log(error);
    });
      }
    render() {
        return (
            <div className="Main">                 
                <Container>                        
                <div  className="Main_forum"> 
                <h1>Fun - Forum</h1>
                <button>Add Comment</button>
                <div className="Comment">
                <Form onSubmit={(e)=>e.preventDefault()}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control onChange={(e)=>this.commnet.subject = e.target.value}  type="text" placeholder="UFC 246 / LAL vs " />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Contenet</Form.Label>
                      <Form.Control onChange={(e)=>this.commnet.content = e.target.value} as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Button type="submit" onClick={()=>this.newPost()}>Submit</Button>
                        </Form.Group>
                  </Form>
                </div>
             </div>

                  <Row>
                    <Col xs={12} md={8}>
                      {/* <h4 className="football-vid">Today's Football Highlights: {this.state.game}</h4>
                      <iframe className="Main_iframe" src={this.state.video} frameBorder="0"
                        width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen" title="Football">
                      </iframe> */}
                    </Col>
                    <Col xs={6} md={4}>
                      {/* <h4 className="nba-Schedule">NBA Schedule:</h4>  
                      <div className="Main_tickerv-wrap">
                        <ul>
                          {this.state.nbagames.map((g, i) => <li className='nba-games' key={i}>{g}</li>)}
                        </ul> 
                      </div> */}
                    </Col>
                  </Row>
                  <div className="Main_posts">
                    {this.state.posts.map((p,i)=> 
                    <div className="Main_posts_singlePost" key={i}>
                      <h2>{p.name}</h2>
                      <h4>{p.subject}</h4>
                       <p>{p.content}</p>
                    </div>
                    )}
                  </div>
             <MainCarusel />

      
              </Container>
            </div>
        );
    }

    componentDidMount(){
      // FOOTBALL
      axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response)=> {
            let game = response.data[0].title;
            let video = response.data[1].videos[0].embed;
            this.setState({video: video.split("'")[3], game: game});
        })
        .catch((error)=> {
            console.log(error);
        });

        const AuthStr = 'Bearer ' + localStorage.token;
        axios.get('/posts',
        { 'headers': { 'Authorization': AuthStr } }
        )
        .then((res)=> {
              this.setState({posts:res.data})
          })
          .catch((error)=> {
              console.log(error);
          });

        // NBA
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
        .then((response)=> {
          let index = new Date().getMonth() + 4;
          let d = new Date().getDate().toString();
          if(d.toString().length < 2) 
          {
            d = '0'+d
          }
          let gArray = response.data.lscd[index].mscd.g;
          let gameList = [];
          for(let i=0; i<gArray.length; i++) 
          {
            if(Number(gArray[i].gdte.split("-")[2]) >= Number(d)) {
              gameList.push(gArray[i]);
              if(gameList.length === 20) {
                break;
              }
            }
          }
          function reverseString(str) {
            let splitString = str.split("-");
            let reverseArray = splitString.reverse();
            let joinArray = reverseArray.join("-");
            return joinArray;
        }
          let date = gameList.map(g => reverseString(g.gdte));
          let upcomingGames = gameList.map((g, i) => `${date[i]}: ${g.h.tn} VS ${g.v.tn}`)    
            this.setState({nbagames: upcomingGames})
        })
        .catch((error)=> {
            console.log(error);
        });

    }
}

export default Main;