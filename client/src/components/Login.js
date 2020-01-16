import React, { Component } from 'react';
import './Login.css'
import Homepage from './Homepage';

class Login extends Component {
    state = {buttonflag: false}
    render() {
        if(this.state.buttonflag) {
            return <Homepage/>
        }
        return (
            <div className='login'>
                <input type='email' placeholder='email'></input> <br></br>
                <input type='password' placeholder='password'></input> <br></br>
                <button>Log in</button>
                <button onClick={() => this.setState({buttonflag: true})}>Return</button>
            </div>
        );
    }
}

export default Login;