import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <input type='email' placeholder='email'></input> <br></br>
                <input type='password' placeholder='password'></input> <br></br>
                <button>Log in</button>
            </div>
        );
    }
}

export default Login;