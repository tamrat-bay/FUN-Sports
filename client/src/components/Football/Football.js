import React, { Component } from 'react';
import axios from 'axios';
import './Football.css';
import Spinner from 'react-bootstrap/Spinner';
import Nav from 'react-bootstrap/Nav';


class Football extends Component 
{
    state = {
        choosenGames:[{}], competitionGamesVideo: [{}], noGames:'No games', returnFlag: false, return: false,
        loading: ''
    }
    render() 
    {
        const getCountry = (country, data) =>
        { 
            this.setState({returnFlag: true});
            return data.filter((g, i) => g.competition.split(':')[0] === country);
        }

        const displayLeague = (e) =>
        {           

            let games =  getCountry(e.target.innerText, this.state.competitionGamesVideo);
        
            this.setState({choosenGames: games});

        }
 
        if(this.state.returnFlag)
        {
            return (
                <div className='football'>
                    <h1 className='football-title'>Football Highlights</h1>
                    <Nav className="Football_nav" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} href=""> SPAIN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-1">ITALY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-2">PORTUGAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-3">FRANCE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-3">GERMANY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={() => this.setState({returnFlag: false})} eventKey="link-3">Return</Nav.Link>
                    </Nav.Item>
                </Nav> 
                
                <div className='main-div'>
                         
               { this.state.choosenGames.length > 0 ? 
                    
                    this.state.choosenGames.map((g, i) => {
                    return (
                        <div key={i} className='each-game'>
                            <h4>{g.competition}</h4>
                            <h5>{g.game}</h5>
                            <div className="video-div">
                                <iframe className="embed-responsive-item" src={g.video} frameBorder="0"
                                    width="100%" height="100%" title="Football" allowFullScreen allow="autoplay; fullscreen">
                                </iframe>
                            </div>
                        </div>
                        )}) 
                        :                            
                            <div className='no-games'>
                                <h4>{this.state.noGames}</h4>
                            </div>
                        }
                         </div>
                    </div>
            )
        }
        return (
            <div className='football'>
                <h1 className='football-title'>Football Highlights</h1>
           <Nav className="Football_nav" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} href=""> SPAIN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-1">ITALY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-2">PORTUGAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-3">FRANCE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) => displayLeague(e)} eventKey="link-3">GERMANY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={() => this.setState({returnFlag: false})} eventKey="link-3">Return</Nav.Link>
                    </Nav.Item>
                </Nav> 
                

                <div className='main-div'>
                
              {  this.state.competitionGamesVideo.map((g, i) => {
                    if(i < 6)
                    {
                    return (
                        
                        <div key={i} className='each-game'>
                            <span className='loading-spinner'>{this.state.loading}</span>

                            <h4>{g.competition}</h4>
                            <h5>{g.game}</h5>
                            <div className="video-div">
                                <iframe className="embed-responsive-item" src={g.video} frameBorder="0"
                                    width="100%" height="100%" title="Football" allowFullScreen allow="autoplay; fullscreen">
                                </iframe>
                            </div>
                        </div>
                        )}else{return ''}}
                        )}
                </div>
            </div>
        );
    }
    componentDidMount() 
    {
        this.setState({loading: <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>});
        axios.get('https://www.scorebat.com/video-api/v1/')
      .then((res)=> {
        if(res.status === 200)
        {
            
            let competitionGamesVideo = [];
            for(let i=0; i<res.data.length; i++)
            {
                let cgvObj = 
                {
                    competition: res.data[i].competition.name,
                    game: res.data[i].title,
                    video: res.data[i].videos[0].embed.split("'")[3]
                }
                competitionGamesVideo.push(cgvObj);
            }            
            this.setState({competitionGamesVideo: competitionGamesVideo})
        }

        this.setState({loading: ''})
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default Football;