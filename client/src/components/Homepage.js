import React, { Component } from 'react';
import './Homepage.css';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Signin from './Signin';





class Homepage extends Component {
    state={loginFlag:false, signInFlag:false, guestFlag:false}
    render() {
        if (this.state.loginFlag) {
            return   <Login/>
        }
        if (this.state.signInFlag) {
            return   <Signin/>
        }
        if (this.state.guestFlag) {
            return   <Signin/>
        }
        return (
            <div className="Hompage frame">
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link onClick={()=>this.setState({loginFlag:true})}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link onClick={()=>this.setState({signInFlag:true})}>Sign In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link onClick={()=>this.setState({guestFlag:true})}>Guest</Nav.Link>
                        </Nav.Item>
                    </Nav>
                <div className='images'>
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