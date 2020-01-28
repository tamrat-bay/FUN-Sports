import React, { Component } from 'react';
import axios from 'axios';
import './NBA.css';
import Table from 'react-bootstrap/Table'
class NBA extends Component {
    // state = {month:'', day:'', week:'', arena:'', city:'', cityAb:'', timeZone:'', upcomingGames:'', game:[]}
    state = {month:'', day:'', week:'',  timeTeamsArena: [{}]}
    render() 
    {
        return (
            <div className='div-pic'>
                <h1 className='nba-title'>NBA schedule</h1>
        <Table striped bordered hover>
            <thead>
                <tr className='main-th'>
                <th>Date</th>
                <th>Time</th>
                <th>Teams</th>
                <th>Arena</th>
                </tr>
            </thead>
            <tbody>

                {this.state.timeTeamsArena.map((g, i) => {
                    return(
                <tr key={i}>
                    <td className='date'>
                        {this.state.month} {this.state.day} <br></br>
                        <div className='week'>WEEK {g.week}</div>
                        <div className='week'>{this.state.timeTeamsArena.length} GAMES</div>
                    </td>
                    <td>{g.time}</td>
                    <td className='teams'>
                        <p>{g.team1} {g.team1Nick}</p> 
                        <p>{g.team2} {g.team2Nick}</p>
                        {/* {console.log(g.team1)} */}
                        {/* {console.log('Charlotte')} */}
                        {/* {console.log(g.team1 == 'Charlotte')} */}
                        {/* {g.team1 == 'Charlotte'}?{console.log(g.team1, 'good')}:{console.log(g.team1, 'bad')} */}
                        {/* {g.team1 == 'Charlotte'}?<span>icon</span>:{console.log(g.team1, 'bad')} */}

                    </td>
                    <td>
                        {g.arena} <br></br>
                        {g.place1}, {g.place2}
                    </td>
                </tr>
                    )})}
            </tbody>
        </Table>
            </div>
        );
    }
    
    componentDidMount() 
    {
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
      .then((res)=> {

            // let date = new Date().getDate();           
            let index = new Date().getMonth()+4;
            let todayDay = new Date().getDate(); 
            let monthGames = res.data.lscd[index].mscd.g;
            let correntMonth = res.data.lscd[index].mscd.mon;

            let currentMonthGames = [];
            for(let i=0; i<monthGames.length; i++)
            {
                if(todayDay <= Number(monthGames[i].gdte.split("-")[2]))
                {
                    currentMonthGames.push(monthGames[i]);
                }
            }            

            let todayGames = currentMonthGames.filter((g, i) => g.gdte.split("-")[2] == todayDay);

            let timeTeamsArena = []; // team1 = [];
            for(let i=0; i<todayGames.length; i++)
            {
                let ttaObj = 
                {
                    week: todayGames[i].gweek,
                    time: todayGames[i].stt,
                    team1: todayGames[i].h.tc,
                    team1Nick: todayGames[i].h.tn,
                    team2: todayGames[i].v.tc,
                    team2Nick: todayGames[i].v.tn,
                    arena: todayGames[i].an,
                    place1: todayGames[i].ac,
                    place2: todayGames[i].as
                }
                timeTeamsArena.push(ttaObj);

            }
            console.log(timeTeamsArena, 'timeTeamsArena');
            this.setState({timeTeamsArena: timeTeamsArena})
            
            this.setState({month: correntMonth, day: todayDay});

        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default NBA;


// PRIVUOS CODE
// import React, { Component } from 'react';
// import axios from 'axios';
// import './NBA.css';

// class NBA extends Component {
//     state = {month:'', day:'', week:'', arena:'', city:'', cityAb:'', timeZone:'', upcomingGames:'', game:[]}
//     render() 
//     {
//         return (
//             <div>
                
//                 <p>this is NBA page</p>
//                 <section className='detail-section'>
//                     <span className='date-time'>
//                         <span className='date'>{this.state.month} {this.state.day}</span><br></br>
//                         <span className='week'>WEEK {this.state.week}</span>
//                     </span>
//                     <div className='main-div'>
//                          <div className='time-zone'>
//                             <p>{this.state.timeZone}</p>
//                          </div>
//                          <div className='upcomingGames'>
//                              {this.state.game.map((g, i) => {
//                                  return (
//                                 <div key={i}>
//                                     <p>{g.split('-')[0]}</p>
//                                     <p>{g.split('-')[1]}</p>
//                                 </div>
//                                 )
//                              })}
//                          </div>
//                          <div className='city-div'>
//                             <span>{this.state.arena}</span> <br></br>
//                             <span>{this.state.city}, {this.state.cityAb}</span>
//                          </div>
//                     </div>
                    
//                 </section>
                
//             </div>
//         );
//     }
//     componentDidMount() 
//     {
//         axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
//       .then((res)=> {

            

//             // let week = res.data.lws[14].week; //////////////////////////////
//             let arena1  = res.data.lscd[4].mscd.g[1].an;
//             let city1 = res.data.lscd[4].mscd.g[1].ac;
//             let cityAb1 = res.data.lscd[4].mscd.g[1].as;
//             let timeZone1 = res.data.lscd[4].mscd.g[1].stt;

//             let date = new Date().getDate();
//             // console.log(day, 'day'); 
//             // console.log(date, 'date'); 

            
//             let index = new Date().getMonth()+4;
//             let todayDay = new Date().getDate(); 
//             let monthGames = res.data.lscd[index].mscd.g;
//             // console.log(monthGames, 'monthGames');
//             // console.log(todayDay, 'todayDay');
//             // console.log(Number(monthGames[1].gdte.split("-")[2]), '?')

//             let gameList = [];
//             for(let i=0; i<monthGames.length; i++)
//             {
//                 if(todayDay <= Number(monthGames[i].gdte.split("-")[2]))
//                 {
//                     // console.log(monthGames[i]);
//                     gameList.push(monthGames[i]);
//                 }
//             }
//             console.log(gameList, 'gameList');
            
//             let month = res.data.lscd[index].mscd.mon;
//             console.log(month);
//             console.log(todayDay);

//             // let upcomingGames = gameList.map((g => `${g.h.tc} ${g.h.tn} \n ${g.v.tc} ${g.v.tn}`));
//             let arena = gameList.map(g => `${g.an}`);
//             let week = gameList.map(g => `${g.gweek}`);
//             // let timeZone = gameList.map(g => `${g.stt}`);
//             let city = gameList.map(g => `${g.ac}`);
//             let cityAb = gameList.map(g => `${g.as}`);

//             // console.log(week, 'week');
//             // console.log(timeZone, 'timeZone');
//             // console.log(upcomingGames, 'upcomingGames');
//             // console.log(arena, 'arena');
//             // console.log(city, 'city');
//             // console.log(cityAb, 'cityAb');
            
//             this.setState({month: month, day: todayDay, arena: arena1, city: city1, cityAb: cityAb1, timeZone: timeZone1})

//             let todayGames = gameList.filter((g, i) => g.gdte.split("-")[2] == todayDay);
//             // let tomorrowGames = gameList.filter((g, i) => g.gdte.split("-")[2] == todayDay+1);

//             let gameDay = gameList[0].gdte.split("-")[2];
//             console.log(Number(gameDay), 'gameDay');
//             console.log(todayGames);

//             let upcomingGames = todayGames.map((g => `${g.h.tc} ${g.h.tn} - ${g.v.tc} ${g.v.tn}`));
//             let timeZone = todayGames.map(g => `${g.stt}`);

//             console.log(timeZone);
            
//             this.setState({game: upcomingGames});

//         })
//         .catch((error)=> {
//             console.log(error);
//         });
//     }
// }

// export default NBA;