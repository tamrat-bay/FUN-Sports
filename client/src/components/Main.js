import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Main.css'
import MainCarusel from './MainCarusel';

class Main extends Component {
    state = {video: '', game:'', nbagames: [], mma: ''}
    render() {
        return (
            <div className="Main">                 
                <Container>
                
                  <Row>
                    <Col xs={12} md={8}>
                      <p className="football-vid">Today's Football Highlights: {this.state.game}</p>
                      <iframe className="Main_iframe" src={this.state.video} frameBorder="0"
                        width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen" title="Football">
                      </iframe>
                    </Col>
                    <Col xs={6} md={4}>
                      <p className="nba-Schedule">NBA Schedule:</p>  
                      <div className="Main_tickerv-wrap">
                        <ul>
                          {this.state.nbagames.map((g, i) => <li className='nba-games' key={i}>{g}</li>)}
                        </ul> 
                      </div>
                    </Col>
                  </Row>
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

        // NBA
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
        .then((response)=> {
          let index = new Date().getMonth()+4;

          let d = new Date().getDate().toString();
          if(d.toString().length < 2) {d = '0'+d};
          let gArray = response.data.lscd[index].mscd.g;
          console.log(gArray, 'garr');
          
          let gameList = [];
          for(let i=0; i<gArray.length; i++) {
            if(Number(gArray[i].gdte.split("-")[2]) >= Number(d)) {
              gameList.push(gArray[i]);
              if(gameList.length === 20) {
                break;
              }
            }
          }
          function reverseString(str) {
            var splitString = str.split("-");
            var reverseArray = splitString.reverse();
            var joinArray = reverseArray.join("-");
            return joinArray;
        }
          let date = gameList.map(g => reverseString(g.gdte));
            let upcomingGames = gameList.map((g, i) => `${date[i]}: ${g.h.tn} VS ${g.v.tn}`)
            console.log(upcomingGames,'upcoming');
            // console.log(date,'date');
            console.log(gameList,'gameList');
      
            this.setState({nbagames: upcomingGames})

        })
        .catch((error)=> {
            console.log(error);
        });

    }
}

export default Main;