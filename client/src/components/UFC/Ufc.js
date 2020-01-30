import React, { Component } from 'react';
import CarouselComp from '../CarouselComp/CarouselComp'
import './Ufc.css'
import Fighter from './Fighter';
import fightersList from './FightersList';
import FightersDetails from './FightersDetails';

export default class Ufc extends Component {
    state = {fighterData:false, singleFighterData:{},fighters:[] }

    backToUfcPage=()=>
    {
        this.setState({fighterData:false,clickedName:''});
    }

    fighterDetailes=(e,data)=>
    {
        if (e.target.className === 'Fighter') 
        {
            console.log(e.target.id, 'id');
            this.setState({fighterData:!this.state.fighterData,singleFighterData:data});
        }else
        {
         console.log(e.target.parentElement.id, 'id');
         this.setState({fighterData:!this.state.fighterData,singleFighterData:data});
        }
    }

   

    render() {
        console.log(this.state.singleFighterData);
        let fighters = this.state.fighters;
        const getFighterByDevision = (dev) =>
        {
            
            fighters = fightersList.map((f,i)=>  <Fighter key={i} name={f.name} dev={dev} fighterDetailes={this.fighterDetailes} />)
                        console.log(fighters[30],'figherlingth');
                        
                this.setState({fighters: fighters})


            return fighters;
        }
        // console.log(fighters);
        // const fightersDisplay = fightersList.map((f,i)=> i < 8 ?<Fighter key={i} name={f.name} fighterDetailes={this.fighterDetailes} /> : '')
        return (
            <div className="Ufc">

                <CarouselComp img1='img/UFCImages/ConorVsCowboy.jpg' img4='img/UFCImages/Tony.jpg'
                    img2='img/UFCImages/Octagon.jpg' img3='img/UFCImages/NateDiaz.jpg' />   
                {/* Strawweight Bantamweight Flyweight  Featherweight Bantamweight  Welterweight Middleweight Lightweight Heavyweight  */}

                <h1>UFC</h1>
                <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Heavyweight</button>
                <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Welterweight</button>
                <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Lightweight</button>
                <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Middleweight</button>

                <div className="Ufc-fighters">
                { fighters }
                {this.state.fighterData ? <FightersDetails backToUfcPage={this.backToUfcPage} data={this.state.singleFighterData} name='' /> : '' }
             
                </div>
            </div>
        )
    }
    componentDidMount(){
       let fighters = fightersList.map((f,i)=>  <Fighter key={i} name={f.name}  fighterDetailes={this.fighterDetailes} />)
        console.log(fighters[30],'figherlingth');
        
        this.setState({fighters: fighters})
    }
}

// Heavyweight