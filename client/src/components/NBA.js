import React, { Component } from 'react';
import axios from 'axios';
import './NBA.css';

class NBA extends Component {
    state = {month: '', day: '', week: '', arena: '', city: '', cityAb: '', timeZone:''}
    render() 
    {
        return (
            <div>
                <p>this is NBA page</p>
                <section className='detail-section'>
                    <span className='date-time'>
                        <span className='date'>{this.state.month} {this.state.day}</span><br></br>
                        <span className='week'>WEEK {this.state.week}</span>
                    </span>
                    <div className='main-div'>
                         <div className='time-zone'>
                            <p>{this.state.timeZone}</p>
                         </div>
                         <div className='city-div'>
                            <span>{this.state.arena}</span> <br></br>
                            <span>{this.state.city}, {this.state.cityAb}</span>
                         </div>
                    </div>
                    
                </section>
                
            </div>
        );
    }
    componentDidMount() 
    {
        axios.get('https://raw.githubusercontent.com/mtthai/nba-pbp-video/master/schedule.json')
      .then((res)=> {
            let month = res.data.lscd[4].mscd.mon;
            let day = res.data.lscd[4].mscd.g[1].gdte.split("-")[2];
            let week = res.data.lws[14].week;
            let arena = res.data.lscd[4].mscd.g[1].an;
            let city = res.data.lscd[4].mscd.g[1].ac;
            let cityAb = res.data.lscd[4].mscd.g[1].as;
            let timeZone = res.data.lscd[4].mscd.g[1].stt;

            console.log(res.data.lscd[4].mscd.g[1].stt); 

            let index = new Date().getMonth()+4;

            let todayDay = new Date().getDate().toString();
            if(todayDay.toString().length < 2) {todayDay = '0'+todayDay};
            let monthGames = res.data.lscd[index].mscd.g;
            console.log(monthGames, 'monthGames');

            let gameList = [];
            for(let i=0; i<monthGames.length; i++)
            {
                
            }

            this.setState({month: month, day: day, week: week, arena: arena, city: city, cityAb: cityAb, timeZone: timeZone})

        })
        .catch((error)=> {
            console.log(error);
        });
    }
}

export default NBA;