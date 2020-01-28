import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Homepage from './Homepage';
// import Main from './Main';
// import Football from './Football';
// import NBA from './NBA';
// import Ufc from '../ufc/Ufc'
// import Login from './Login';
// import Signup from './Signup';
import Navbar from 'react-bootstrap/Navbar';
import { Redirect } from 'react-router-dom';

export default class NavbarComp extends Component {
    state={logOutFlag:false, signUpFlag:false}
    signOut = ()=>{
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        
        this.setState({logOutFlag:true});
        
    }
render() {
    if (this.state.signUpFlag) {
        return   <Redirect to="/"/>
    }
    if (localStorage.length < 4) {
            return (
                      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                          <Navbar.Brand href="/">FUN-Sports</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">
                              <Nav.Link href="/Main" >Home</Nav.Link>
                              <Nav.Link href="/Football">Football</Nav.Link>
                              <Nav.Link href="/NBA">NBA</Nav.Link>
                              <Nav.Link href="/UFC">UFC</Nav.Link>
                              </Nav>
                              <Nav>
                              <Nav.Item>
                              <Nav.Link className="disabled" > <span className="userWelcome">Hello Guest</span></Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                  <Nav.Link href="/Signup">Sign up</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                  <Nav.Link href="/Login">Login</Nav.Link>
                                  </Nav.Item>
                              </Nav>
                          </Navbar.Collapse>
                          </Navbar>)
    }else{
        return (
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">FUN-Sports</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="/Main">Main Page</Nav.Link>
                        <Nav.Link href="/Football">Football</Nav.Link>
                        <Nav.Link href="/NBA">NBA</Nav.Link>
                        <Nav.Link href="/UFC">UFC</Nav.Link>
                      </Nav>
                      <Nav>
                         <Nav.Item>
                         <Nav.Link ><span className="userWelcome">Hello {localStorage.name}</span></Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                         <Nav.Link onClick={this.signOut}>Exit</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
        </Navbar>)}
        
    }
}
