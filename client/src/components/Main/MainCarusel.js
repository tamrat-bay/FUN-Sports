import React from 'react';
import './MainCarusel.css';

const MainCarusel = () => {
    const images = ['YUSUFF_SODIQ.png','SOUZA_JACARE.png','USMAN_KAMARU_BELT.png','SHEVCHENKO_VALENTINA_BELT.png','RIBAS_AMANDA.png',
                    'MCGREGOR_CONOR.png','CANNONIER_JARED.png','WALKER_JOHNNY.png'];
    let rdx = Math.floor(Math.random()* images.length);
            function randomNumber (){
                let newRdx;
                do {
                  return newRdx = Math.floor(Math.random()* images.length);
                } while (newRdx === rdx);
            }
        return (
            <section className="MainCarusel_slideshow">
            <div className="MainCarusel_slideshow-container slide">
                <img src={`img/all-fighters/${images[randomNumber()]}`} alt="UFC"/>
                <img src={`img/all-fighters/${images[randomNumber()]}`} alt="UFC"/>
                <img src={`img/all-fighters/${images[randomNumber()]}`} alt="UFC"/>
                <img src={`img/all-fighters/${images[randomNumber()]}`} alt="UFC"/>
                <img src={`img/all-fighters/${images[randomNumber()]}`} alt="UFC"/> 
                <img src={`img/all-fighters/${images[randomNumber()]}`} alt="UFC"/> 
            </div>
            </section>

        );
}

export default MainCarusel;