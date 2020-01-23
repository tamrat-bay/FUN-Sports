import React, { Component } from 'react';
import axios from 'axios';
import './Football.css'

class Football extends Component {
    state = {competition:'', game:'', video:''}
    render() {
        return (
            <div>
                <p>this is football page</p>
                <h3>{this.state.competition}</h3> <h3>{this.state.game}</h3>
                <div className="video-div">
                    <iframe className="embed-responsive-item" src={this.state.video} frameBorder="0"
                        width="100%" height="100%" allowFullScreen allow="autoplay; fullscreen">
                      </iframe>
                </div>
                
            </div>
        );
    }
    componentDidMount() 
    {
        axios.get('https://www.scorebat.com/video-api/v1/')
      .then((res)=> {
          let competition = res.data[3].competition.name;
          let game = res.data[3].title;
          let video = res.data[3].videos[0].embed;
        this.setState({competition: competition, game: game, video: video.split("'")[3]})

        //   let gameInfo = [];
        //   for(let i=0; i<=res.data.length; i++)
        //   {
        //     let competition = res.data[i].competition.name;
        //     let game = res.data[i].title;
        //     let video = res.data[i].videos[0].embed;
        //     gameInfo.push(game);
        //   }

        // //   console.log(res.data.length);
        //   this.setState({competition: competition, game: gameInfo, video: video.split("'")[3]})
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default Football;