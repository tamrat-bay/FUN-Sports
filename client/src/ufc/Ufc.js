import React, { Component } from 'react';
// import axios from 'axios';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import CarouselComp from '../components/CarouselComp'
import './Ufc.css'
import Fighter from './Fighter';
import fightersList from './FightersList';
import FightersDetails from './FightersDetails';

export default class Ufc extends Component {
    state = {fighterData:true,singleFighterData:{}}

backToUfcPage=()=>{
// console.log('back yto life');

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
                {this.state.fighterData ? <FightersDetails backToUfcPage={this.backToUfcPage} name='' /> : '' }
             
                </div>
            </div>
        )
    }
    componentDidMount(){
        // axios.get(`/ufc/Conor McGregor`)
        // .then((response)=> {
        //     console.log(response.data);
        //     let data = response.data
        //     this.setState({name:data.name, age:data.age , class:data.weight_class,img:`https://www.sherdog.com${data.image_url}`,nickname:data.nickname})
        // })
        // .catch((error)=> {
        //     console.log(error);
        // });
        
    }
}

