import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './Mainpage.css';

import Homepage from './Homepage';
import Football from './Football';
import NBA from './NBA';
import Ufc from './../ufc/Ufc';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

class Mainpage extends Component {
    state = {footballflag: false, nbaflag: false, ufcflag: false}

    render() {
        if(this.state.footballflag) {
            return <Football/>
        }

        if(this.state.nbaflag) {
            return <NBA/>
        }

        if(this.state.ufcflag) {
            return <Ufc/>
        }



        return (
            <BrowserRouter>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">fun sport</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link onClick={() => this.setState({footballflag: true})} to="/Football">Football</Link>
                        <Link onClick={() => this.setState({nbaflag: true})} to="/NBA">NBA</Link>
                        <Link onClick={() => this.setState({ufcflag: true})} to="/Ufc">UFC</Link>
                    </Nav>
                </Navbar>

                        <Switch>
                            <Route exact path='/Football' component={Football}/>
                            <Route exact path='/NBA' component={NBA}/>
                            <Route exact path='/Ufc' component={Ufc}/>
                        </Switch>
              

                 <div style={{ width: 'auto', height: 'auto' }}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src="http://localhost:3000/img/Premier-League.png" />
                    </ResponsiveEmbed>
                </div>


            </div>
            </BrowserRouter>
        );
    }
}

export default Mainpage;