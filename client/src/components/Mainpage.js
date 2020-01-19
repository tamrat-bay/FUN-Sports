import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './Mainpage.css';

// import Homepage from './Homepage';
import Football from './Football';
import NBA from './NBA';
import Ufc from './../ufc/Ufc';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Main from './Main';

class Mainpage extends Component {
    
    render() {
        const {userName} = this.props;
        return (
            <BrowserRouter>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">fun sport</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/Football">Football</Link>
                        <Link to="/NBA">NBA</Link>
                        <Link to="/Ufc">UFC</Link>
                        {userName ? <p className="userWelcome">Welcome {userName}</p> : ''}
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/Football' component={Football}/>
                    <Route exact path='/NBA' component={NBA}/>
                    <Route exact path='/Ufc' component={Ufc}/>
                </Switch>                
            </div>
            </BrowserRouter>
        );
    }
}

export default Mainpage;