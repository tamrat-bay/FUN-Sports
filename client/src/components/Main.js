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
            <div>                
                <Container>
                
                <Row>
    <Col xs={12} md={8}>
   <iframe className="Main_iframe" title="Football"  src={this.state.video} frameBorder="0"
    width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen"
     ></iframe>
   <p>Today's Football Highlights: {this.state.game}</p>
    </Col>
    <Col xs={6} md={4}>
      <p>NBA Schedule: </p>
    </Col>
  </Row>

  <Row>
    <Col xs={12} md={8}>
   <iframe className="Main_iframe" src={this.state.video} frameBorder="0"
    width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen"
     ></iframe>
     
    </Col>
    <Col xs={6} md={4}>
      {this.state.nbagames.map((g, i) => <p className='nba-games' key={i}>{g}</p>)}
      {/* {console.log(this.state.nbagames[0])} */}
    </Col>
  </Row>
          {this.state.mma}
          <MainCarusel/>
  
</Container>
            </div>
        );
    }

    componentDidMount(){
      // FOOTBALL
      axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response)=> {
            // console.log(response.data[0]);
            let game = response.data[0].title;
            let video = response.data[1].videos[0].embed;
            // console.log(game);
            // console.log(video);
            this.setState({video: video.split("'")[3], game: game});
        })
        .catch((error)=> {
            console.log(error);
        });
        // NBA
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
        .then((response)=> {
          // console.log(response);
          // console.log(response.data.lscd[4].mscd.g[200].gdte.split("-")[2]);
          let games = [];
            for(let i=110; i<121; i++) {
              let day = response.data.lscd[4].mscd.g[i].gdte.split("-")[2];
              let month = response.data.lscd[4].mscd.g[i].gdte.split("-")[1];
              let year = response.data.lscd[4].mscd.g[i].gdte.split("-")[0];
              let date = `${day}-${month}-${year}`;


              // let home = response.data.lscd[4].mscd.g[i].h.tc;
                let homeNick =response.data.lscd[4].mscd.g[i].h.tn;
                // let away = response.data.lscd[4].mscd.g[i].v.tc;
                let awayNick = response.data.lscd[4].mscd.g[i].v.tn;
                 games.push(`${date}: ${homeNick} VS ${awayNick}`);
            }            
            this.setState({nbagames: games})
        })
        .catch((error)=> {
            console.log(error);
        });
        
        // UFC
        axios.get('/ufc/Khabib')
      .then((response)=> {
        console.log(response);
        let name = response.data.name;
        console.log(response.data.name);
        this.setState({mma: name})
      })
      .catch((error)=> {
          console.log(error);
      });
    }

}

export default Main;