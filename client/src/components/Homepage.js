import React, { Component } from 'react';
import './Homepage.css';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Signup from './Signup';
import Mainpage from './Mainpage';



class Homepage extends Component {
    state={loginFlag:false, signUpFlag:false, guestFlag:false}
    signOut = ()=>{
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        this.setState({signUpFlag:false});
    }
returnToHome = (e)=>{
if (e.target.name === 'login') return this.setState({loginFlag:false})
if (e.target.name === 'signUp') return this.setState({signUpFlag:false})
}
    render() {
        if (this.state.loginFlag) {
            return   <Login returnToHome={this.returnToHome} />
        }
        if (this.state.signUpFlag) {
            return   <Signup returnToHome={this.returnToHome} />
        }
        if (this.state.guestFlag) {
            return   <Mainpage/>
        }
        return (
            <div className="Homepage frame">
                {localStorage.length < 2 ?
                                <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link onClick={()=>this.setState({signUpFlag:true})}>Sign up</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={()=>this.setState({loginFlag:true})}>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={()=>this.setState({guestFlag:true})}>Guest</Nav.Link>
                                </Nav.Item>
                            </Nav>:               
                          <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link onClick={()=>this.setState({guestFlag:true})}>Main page</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={this.signOut}>Exit</Nav.Link>
                        </Nav.Item>
                       <p className="userWelcome">Hello {localStorage.name}</p>
                    </Nav> }
       
                    {/* <div className="Homepage_logo">
                         <img src="img/LogoPlusSlogan.svg" alt="Logo" />
                    </div> */}
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