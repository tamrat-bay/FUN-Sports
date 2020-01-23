import React, { Component } from 'react';
// import axios from 'axios';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import CarouselComp from '../components/CarouselComp'
import './Ufc.css'
import Fighter from './Fighter';
import fightersList from './FightersList';


export default class Ufc extends Component {
    // state = {name:'',age:'',class:'',img:'',record:'',nickname:''}

    // fighterData = (fighterObj,fullName)=>{
    //     return axios.get(`/ufc/${fullName}`)
    //     .then((response)=> {
    //         console.log(response.data);
    //         fighterObj.data = response
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     });
    //     }
    render() {
        const fighters = fightersList.map((f,i)=> <Fighter key={i} name={f.name} />)
        return (
            <div className="Ufc">
              <CarouselComp img1='img/UFCImages/ConorVsCowboy.jpg' img4='img/UFCImages/Tony.jpg'
              img2='img/UFCImages/Octagon.jpg' img3='img/UFCImages/NateDiaz.jpg' />   
                <h1>UFC</h1>
                
                <div className="Ufc-fighters">
                {fighters}
                </div>
                {/* <Container>
                <Row>
                 <Col>
                  <Fighter name='Israel Adesanya' />
                 </Col>

                    <Col>   
                    <Fighter name='Yoel Romero' />
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                </Container> */}
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

