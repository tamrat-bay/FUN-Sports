import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './Mainpage.css';

// import Homepage from './Homepage';
import Football from './Football';
import NBA from './NBA';
import Ufc from './../ufc/Ufc';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Main from './Main';

class Mainpage extends Component {
    static defaultProps = {
        user:localStorage
     };
    render() {
        
        const {user} = this.props;
        // const {user.name,user.token} = user
        
        return (
            <BrowserRouter>
            <div className="MainPage">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">fun sport</Navbar.Brand>
                    <div className="MainPage_nav">
                        <Link to="/Football">Football</Link>
                        <Link to="/NBA">NBA</Link>
                        <Link to="/Ufc">UFC</Link>
                        {user.name ? <p className="userWelcome">Welcome {user.name}</p> : <p className="userWelcome">Wellcome Guest</p>}
                    </div>
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