import React, { Component } from 'react';
import CarouselComp from '../CarouselComp/CarouselComp'
import './Ufc.css'
import Fighter from './Fighter';
import fightersList from './FightersList';
import FightersDetails from './FightersDetails';
import Nav from 'react-bootstrap/Nav';


export default class Ufc extends Component {
    state = {fighterDataFlag:false, singleFighterData:{},fighters:[],fightersDisplay:false, loading: ''}

    backToUfcPage=()=>
    {
        this.setState({fighterDataFlag:false,clickedName:''});
    }

    fighterDetailes=(e,data)=>
    {
        if (e.target.className === 'Fighter') 
        {
            this.setState({fighterDataFlag:!this.state.fighterDataFlag,singleFighterData:data});
        }else
        {
            this.setState({fighterDataFlag:!this.state.fighterDataFlag,singleFighterData:data});
        }
    }

    render() {
        console.log(this.state.singleFighterData);
        let fighters = this.state.fighters;
        const getFighterByDevision = (dev) =>
        {      
            fighters = fightersList.map((f,i)=>  <Fighter key={i} name={f.name} dev={dev} fighterDetailes={this.fighterDetailes} />)
            this.setState({fighters: fighters, fightersDisplay:true})
            return fighters;
        }

        return (
            <div className="Ufc">

                <CarouselComp img1='img/UFCImages/ConorVsCowboy.jpg' img4='img/UFCImages/Tony.jpg'
                    img2='img/UFCImages/Octagon.jpg' img3='img/UFCImages/NateDiaz.jpg' />   

                <h1>UFC</h1>
                <div className='buttons'>
                    {/* <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Heavyweight</button>
                    <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Lightheavyweight</button>
                    <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Middleweight</button>
                    <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Lightweight</button>
                    <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Featherweight</button>
                    <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Bantamweight</button>
                    <button onClick={(e) =>  getFighterByDevision(e.target.innerText)}>Flyweight</button> */}

                    <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} href=""> Heavyweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} eventKey="link-1">Lightheavyweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} eventKey="link-2">Middleweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} eventKey="link-3">Lightweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} eventKey="link-3">Featherweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} eventKey="link-4">Bantamweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link onClick={(e) =>  getFighterByDevision(e.target.innerText)} eventKey="link-5">Flyweight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-6"></Nav.Link>
                    </Nav.Item>
                </Nav> 
                </div>
                


                <div className="Ufc-fighters">
                {!this.state.fightersDisplay ? this.state.fighters.map((f,i)=> i < 8 ? f : '') : this.state.fighters}
                {this.state.fighterDataFlag ? <FightersDetails backToUfcPage={this.backToUfcPage} data={this.state.singleFighterData} name='' /> : '' }         
                </div>
            </div>
        )
    }
    componentDidMount(){
       let fighters = fightersList.map((f,i)=>  <Fighter key={i} name={f.name}  fighterDetailes={this.fighterDetailes} />)        
        this.setState({fighters: fighters})
    }
}

