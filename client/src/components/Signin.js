import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='username'></input><br></br>
                <input type='email' placeholder='email'></input><br></br>
                <input type='password' placeholder='password'></input><br></br>
                <input type='checkbox'></input><br></br>
                <button>Sign in</button>
            </div>
        );
    }
}

export default Signin;