import React from 'react';
import './App.css';
<<<<<<< HEAD:client/src/App.js
import Ufc from './ufc/Ufc';
=======
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signin from './components/Signin';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
>>>>>>> 3be87f4ea21ad808a87573707b130750278fa6bf:src/App.js


function App() {
  return (
    <div className="App">
<<<<<<< HEAD:client/src/App.js
        hello react
        <Ufc/>
=======
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
      </BrowserRouter>

>>>>>>> 3be87f4ea21ad808a87573707b130750278fa6bf:src/App.js
    </div>
  );
}

export default App;
