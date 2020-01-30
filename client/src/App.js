import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import Main from './components/Main/Main';
import Football from './components/Football/Football';
import NBA from './components/NBA/NBA';
import Ufc from './components/UFC/Ufc'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComp from './components/NavbarComp/NavbarComp';
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


export default class App extends Component {
  state={isLogged:localStorage.length > 1 ?true : false}
   loginHandler = (data)=>{
         this.setState({isLogged:data})
       }
  render() {
       
    return (
          <div className="App">    
            <BrowserRouter>
                    <NavbarComp loginHandler={this.loginHandler} />
                  <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/Login' render={()=><Login loginHandler={this.loginHandler} />}/>
                    <Route exact path='/Signup' component={Signup}/>
                    <Route exact path='/Main' render={()=><Main/>}/>
                    <Route exact path='/Football' component={Football}/>
                    <Route exact path='/NBA' component={NBA}/>
                    <Route exact path='/Ufc' component={Ufc}/>
                </Switch>  
                <Footer />                
            </BrowserRouter> 
          </div>
    )
  }
}

