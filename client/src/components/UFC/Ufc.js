import React, { Component } from 'react';
import CarouselComp from '../CarouselComp/CarouselComp'
import './Ufc.css'
import Fighter from './Fighter';
import fightersList from './FightersList';
import FightersDetails from './FightersDetails';

export default class Ufc extends Component {
    state = {fighterData:false,singleFighterData:{}}

backToUfcPage=()=>{

    this.setState({fighterData:false,clickedName:''});
}
 fighterDetailes=(e,data)=>{
     if (e.target.className === 'Fighter') {
        console.log(e.target.id);
       this.setState({fighterData:!this.state.fighterData,singleFighterData:data});
     }else{
         console.log(e.target.parentElement.id);    
         this.setState({fighterData:!this.state.fighterData,singleFighterData:data});
        }
 }
    render() {
        console.log(this.state.singleFighterData);
        
        const fighters = fightersList.map((f,i)=>  <Fighter key={i} name={f.name} fighterDetailes={this.fighterDetailes} />)
        return (
            <div className="Ufc">
              <CarouselComp img1='img/UFCImages/ConorVsCowboy.jpg' img4='img/UFCImages/Tony.jpg'
              img2='img/UFCImages/Octagon.jpg' img3='img/UFCImages/NateDiaz.jpg' />   
                <h1>UFC</h1>
                
                <div className="Ufc-fighters">
                { fighters}
                {this.state.fighterData ? <FightersDetails backToUfcPage={this.backToUfcPage} data={this.state.singleFighterData} name='' /> : '' }
             
                </div>
            </div>
        )
    }
}

