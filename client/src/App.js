import React from 'react';
import './App.css';
import Ufc from './ufc/Ufc';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signin from './components/Signin';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Mainpage from './components/Mainpage';


function App() {
  return (
    <div className="App">
        {/* <Ufc/>
      <BrowserRouter>
        <h2>FUN - SPORT WEBSITE</h2>
        <Link to='/'>Homepage</Link>
        <Link to='/Signin'>Sign in</Link>
        <Link to='/Login'>Log in</Link>
        <Link to='/'>Guest</Link>

        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Signin' component={Signin}/>
        </Switch>
      </BrowserRouter> */}

      <Mainpage/>


    </div>
  );
}

export default App;
