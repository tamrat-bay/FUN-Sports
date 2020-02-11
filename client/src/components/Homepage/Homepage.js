import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <div className="Homepage frame">
                <div className='images'>
                    <p className='welcome-para'> 
                        welcome to FUN-sports. Here you can get the best coverage of your favourite sports:
                        football, UFC and NBA. You can find football highlights, UFC fighers information 
                        and NBA schedule. Sign up and share your opinion with us.
                    </p>
                    <img className='fun-logo' src='img/logodefault.png' alt="logo"/>
                    <div className='football-logo'>
                        <a href="/Football"><img src='img/serie-a-logo.png' alt="FunSport" className='seria-a'></img></a>
                        <a href="/Football"><img src='img/Premier-League.png' alt="FunSport" className='Premier-League'></img></a>
                        <a href="/Football"><img src='img/la-liga.png' alt="FunSport" className='la-liga'></img></a>
                    </div>
                    {/* <img src='img/NBA-logo.png' alt="FunSport"></img>
                    <img src='img/UFC_Logo-SVG.svg' alt="FunSport"></img>    */}
                    <a href="/NBA"><img src='img/NBA-logo.png' alt="FunSport" className='nba-logo'></img></a>
                    <a href="/UFC"><img src='img/UFC_Logo-SVG.svg' alt="FunSport" className='udc-logo'></img></a>               
                </div>
            </div>
        );
    }
}

export default Homepage;