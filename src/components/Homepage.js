import React, { Component } from 'react';
import './Homepage.css';



class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='images'>
                <div className='football-logo'>
                        <img src='img/serie-a-logo.png'></img>
                        <img src='img/Premier-League.png'></img>
                        <img src='img/la-liga.png'></img>
                    </div>
                        <img src='img/NBA-logo.png'></img>
                        <img src='img/UFC_Logo-SVG.svg'></img>              
                    </div>

            </div>
        );
    }
}

export default Homepage;