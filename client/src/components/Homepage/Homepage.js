import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <div className="Homepage frame">
                <div className='images'>
                    <img src='img/logodefault.png' alt="logo"/>
                <div className='football-logo'>
                        <img src='img/serie-a-logo.png' alt="FunSport"></img>
                        <img src='img/Premier-League.png' alt="FunSport"></img>
                        <img src='img/la-liga.png' alt="FunSport"></img>
                    </div>
                        <img src='img/NBA-logo.png' alt="FunSport"></img>
                        <img src='img/UFC_Logo-SVG.svg' alt="FunSport"></img>              
                    </div>
            </div>
        );
    }
}

export default Homepage;