import React, { Component } from 'react';
import axios from 'axios';
import './Football.css'

class Football extends Component 
{
    state = {choosenGames:[{}], competitionGamesVideo: [{}]}
    render() 
    {
        const getCountry = (country, data) =>
        {
            return data.filter((g, i) => g.competition.split(':')[0] === country);
        }

        const displayLeague = (e) =>
        {
            let games =  getCountry(e.target.innerText, this.state.competitionGamesVideo);
            
            this.setState({choosenGames: games});
            console.log(games, 'games');
            
        }
      
        return (
            <div>
                <h1 className='football-title'>Football Highlights</h1>
                <button onClick={(e) => displayLeague(e)}>ENGLAND</button>
                <button onClick={(e) => displayLeague(e)}>SPAIN</button>
                <button onClick={(e) => displayLeague(e)}>ITALY</button>
                <button onClick={(e) => displayLeague(e)}>PORTUGAL</button> 
                <button onClick={(e) => displayLeague(e)}>FRANCE</button>
                <button onClick={(e) => displayLeague(e)}>GERMANY</button>

                <div className='main-div'>
                    {this.state.choosenGames.length > 1 ? 
                    
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
                        )}) :
                        this.state.competitionGamesVideo.map((g, i) => {
                            if(i < 6)
                            {
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
                                )}})}
                </div>
            </div>
        );
    }
    componentDidMount() 
    {
        axios.get('https://www.scorebat.com/video-api/v1/')
      .then((res)=> {
        console.log(res.data);
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
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default Football;