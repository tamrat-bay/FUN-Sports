import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './Mainpage.css';

import Football from './Football';
import NBA from './NBA';
import Ufc from './../ufc/Ufc';

class Mainpage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>  
                    <div className='nav-bar'>
                        <Link to='/football'>Football</Link>
                        <Link to='/nba'>NBA</Link>
                        <Link to='/ufc'>UFC</Link>

                        <Switch>
                            <Route exact path='/football' component={Football}/>
                            <Route exact path='/nba' component={NBA}/>
                            <Route exact path='/ufc' component={Ufc}/>
                        </Switch>
                    </div>    
                </BrowserRouter>

                <div className='main-news'>
                    <div className='news-left'></div>
                    <div className='news-left2'></div>
                    {/* <div className='news-rigth'></div> */}
                    {/* <div className='news-bottom'></div> */}
                </div>
            </div>

        );
    }
}

export default Mainpage;