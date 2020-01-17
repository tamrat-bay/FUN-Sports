import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Main.css'
class Main extends Component {
    state = {video: ''}
    render() {
        return (
            <div>
                main page
                <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8}>
   <iframe className="Main_iframe" title="Football"  src={this.state.video} frameBorder="0"
    width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen"
     ></iframe>
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>xs=6</Col>
    <Col xs={6}>xs=6</Col>
  </Row>
</Container>
            </div>
        );
    }

    componentDidMount(){
        axios.get('https://www.scorebat.com/video-api/v1/')
        .then((response)=> {
            console.log(response.data[0]);
           
            let video = response.data[1].videos[0].embed;
            console.log( video.split("'")[2]);
            
            console.log(video);
            this.setState({video: video.split("'")[3]})
            
        })
        .catch((error)=> {
            console.log(error);
        });
    }

//     componentDidMount(){
//         axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
//         .then((response)=> {

//             for(let i=60; i<100; i++) {
//                 let home = response.data.lscd[4].mscd.g[i].h.tc;
//                 let homeNick =response.data.lscd[4].mscd.g[i].h.tn;
//                 let away = response.data.lscd[4].mscd.g[i].v.tc;
//                 let awayNick = response.data.lscd[4].mscd.g[i].v.tn;
//                 let date = response.data.lscd[4].mscd.g[i].gdte;
//                 console.log(date,':', home, homeNick ,'VS', away, awayNick);
//             }
//         })
//         .catch((error)=> {
//             console.log(error);
//         });
//     }
}

export default Main;