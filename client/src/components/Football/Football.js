import React, { Component } from 'react';
import axios from 'axios';
import './Football.css'

class Football extends Component 
{
    state = {competition:'', game:'', video:'', competitionGamesVideo: [{}]}
    render() 
    {
        return (
            <div>
                <h1 className='football-title'>Football Highlights</h1>
                <div className='main-div'>{this.state.competitionGamesVideo.map((g, i) => {
                    return (
                        <div key={i} className='each-game'>
                            <h4>{g.competition}</h4>
                            <h5>{g.game}</h5>
                            <div className="video-div">
                                <iframe className="embed-responsive-item" src={g.video} frameBorder="0"
                                    width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen">
                                </iframe>
                            </div>
                        </div>
                        )})}
                </div>
            </div>
        );
    }
    componentDidMount() 
    {
        axios.get('https://www.scorebat.com/video-api/v1/')
      .then((res)=> {

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
        
        // console.log(competitionGamesVideo);
        this.setState({competitionGamesVideo: competitionGamesVideo})
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default Football;