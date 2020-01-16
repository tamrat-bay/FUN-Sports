import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Homepage from './Homepage';


class Signup extends Component {
  state = {buttonflag: false}

    render() {
      if(this.state.buttonflag) {
        return <Homepage/>
      }
        return (
            <div>
                <input type='text' placeholder='username'></input><br></br>
                <input type='email' placeholder='email'></input><br></br>
                <input type='password' placeholder='password'></input><br></br>
                <input type='checkbox'></input><br></br>
                <button>Sign up</button>
                <button onClick={() => this.setState({buttonflag: true})}>Return</button>

                {/* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicUsername">
    <Form.Control type="text" placeholder="username" />
  </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
            </div>
        );
    }
}

export default Signup;