import React, { Component } from 'react';
import axios from 'axios';
import './NBA.css';
import Table from 'react-bootstrap/Table'
class NBA extends Component {
    state = {month:'', day:'', week:'', arena:'', city:'', cityAb:'', timeZone:'', upcomingGames:'', game:[]}
    render() 
    {
        return (
            <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>date</th>
      <th>Time</th>
      <th>Teams</th>
      <th>Where</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='date'>{this.state.month} {this.state.day}</td>
      <td>{this.state.timeZone}</td>
      <td>{this.state.game.map((g, i) => {
                                    return (
                                    <div key={i}>
                                        <p>{g.split('-')[0]}</p>
                                        <p>{g.split('-')[1]}</p>
                                    </div>
                                    )
                                })}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td></td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td></td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

                <table>

                <section className='detail-section'>
                    <tr>
                        <span className='date-time'>
                            <span className='date'>{this.state.month} {this.state.day}</span><br></br>
                            <span className='week'>WEEK {this.state.week}</span>
                        </span>
                    </tr>

                    <div className='main-div'>
                        <tr>
                            <div className='time-zone'>
                            <td> <p>{this.state.timeZone}</p> </td>
                            </div>
                         </tr>
                         <tr>
                            <div className='upcomingGames'>
                                <td>
                                {this.state.game.map((g, i) => {
                                    return (
                                    <div key={i}>
                                        <p>{g.split('-')[0]}</p>
                                        <p>{g.split('-')[1]}</p>
                                    </div>
                                    )
                                })}
                                </td>
                            </div>
                         </tr>
                         <tr>
                         <div className='city-div'>
                             <td>
                                <span>{this.state.arena}</span> <br></br>
                                <span>{this.state.city}, {this.state.cityAb}</span>
                            </td>
                         </div>
                         </tr>
                    </div>
                    
                </section>
                </table>
            </div>
        );
    }
    componentDidMount() 
    {
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
      .then((res)=> {

            

            // let week = res.data.lws[14].week; //////////////////////////////
            let arena1  = res.data.lscd[4].mscd.g[1].an;
            let city1 = res.data.lscd[4].mscd.g[1].ac;
            let cityAb1 = res.data.lscd[4].mscd.g[1].as;
            let timeZone1 = res.data.lscd[4].mscd.g[1].stt;

            let date = new Date().getDate();
            // console.log(day, 'day'); 
            // console.log(date, 'date'); 

            
            let index = new Date().getMonth()+4;
            let todayDay = new Date().getDate(); 
            let monthGames = res.data.lscd[index].mscd.g;
            // console.log(monthGames, 'monthGames');
            // console.log(todayDay, 'todayDay');
            // console.log(Number(monthGames[1].gdte.split("-")[2]), '?')

            let gameList = [];
            for(let i=0; i<monthGames.length; i++)
            {
                if(todayDay <= Number(monthGames[i].gdte.split("-")[2]))
                {
                    // console.log(monthGames[i]);
                    gameList.push(monthGames[i]);
                }
            }
            console.log(gameList, 'gameList');
            
            let month = res.data.lscd[index].mscd.mon;
            console.log(month);
            console.log(todayDay);

            // let upcomingGames = gameList.map((g => `${g.h.tc} ${g.h.tn} \n ${g.v.tc} ${g.v.tn}`));
            let arena = gameList.map(g => `${g.an}`);
            let week = gameList.map(g => `${g.gweek}`);
            // let timeZone = gameList.map(g => `${g.stt}`);
            let city = gameList.map(g => `${g.ac}`);
            let cityAb = gameList.map(g => `${g.as}`);

            // console.log(week, 'week');
            // console.log(timeZone, 'timeZone');
            // console.log(upcomingGames, 'upcomingGames');
            // console.log(arena, 'arena');
            // console.log(city, 'city');
            // console.log(cityAb, 'cityAb');
            
            this.setState({month: month, day: todayDay, arena: arena1, city: city1, cityAb: cityAb1, timeZone: timeZone1})

            let todayGames = gameList.filter((g, i) => g.gdte.split("-")[2] == todayDay);
            // let tomorrowGames = gameList.filter((g, i) => g.gdte.split("-")[2] == todayDay+1);

            let gameDay = gameList[0].gdte.split("-")[2];
            console.log(Number(gameDay), 'gameDay');
            console.log(todayGames);

            let upcomingGames = todayGames.map((g => `${g.h.tc} ${g.h.tn} - ${g.v.tc} ${g.v.tn}`));
            let timeZone = todayGames.map(g => `${g.stt}`);

            console.log(timeZone);
            
            this.setState({game: upcomingGames});

        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default NBA;