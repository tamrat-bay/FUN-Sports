import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavbarComp extends Component {
    signOut = ()=>{
        localStorage.clear();    
    }
render() {
    if (localStorage.length < 4) {
            return (
                      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                          <Navbar.Brand href="/">FUN-Sports</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">
                              <Nav.Link href="/Forum" >Forum</Nav.Link>
                              <Nav.Link href="/Football">Football</Nav.Link>
                              <Nav.Link href="/NBA">NBA</Nav.Link>
                              <Nav.Link href="/UFC">UFC</Nav.Link>
                              </Nav>
                              <Nav>
                              <Nav.Item>
                              <Nav.Link className="disabled" > <span className="guestWelcome">Hello Guest</span></Nav.Link>
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
                        <Nav.Link href="/Forum">Forum</Nav.Link>
                        <Nav.Link href="/Football">Football</Nav.Link>
                        <Nav.Link href="/NBA">NBA</Nav.Link>
                        <Nav.Link href="/UFC">UFC</Nav.Link>
                      </Nav>
                      <Nav>
                         <Nav.Item>
                         <Nav.Link ><span className="userWelcome">Hello {localStorage.name}</span>
                         
                         </Nav.Link>
                         </Nav.Item>
                        <div className="profileImg"> {localStorage.image ? <img className="avatar" src={localStorage.image} alt="man"/> : ''}
                        </div>
                         <Nav.Item>
                         <Nav.Link  onClick={this.signOut} href="/"> Exit</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
        </Navbar>)}
        
    }
}
