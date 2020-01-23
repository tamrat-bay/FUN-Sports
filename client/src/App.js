import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Main from './components/Main';
import Football from './components/Football';
import NBA from './components/NBA';
import Ufc from './ufc/Ufc'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';



function App() {
  return (
    <div className="App">

      {localStorage.length <3 ? 
      <Homepage />
        : 
           
 
            <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">fun sport</Navbar.Brand>
                    <div className="MainPage_nav">
                        <Link to="/Football">Football</Link>
                        <Link to="/NBA">NBA</Link>
                        <Link to="/Ufc">UFC</Link>
                        {/* {user.name ? <p className="userWelcome">Welcome {user.name}</p> : <p className="userWelcome">Wellcome Guest</p>} */}
                    </div>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/Football' component={Football}/>
                    <Route exact path='/NBA' component={NBA}/>
                    <Route exact path='/Ufc' component={Ufc}/>
                </Switch>                
          
            </BrowserRouter> 
           } 
    </div>
  );
}

export default App;
