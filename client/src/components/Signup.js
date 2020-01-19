import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Homepage from './Homepage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Signup.css';


class Signup extends Component {
  state = {buttonflag: false}

    render() {
      if(this.state.buttonflag) {
        return <Homepage/>
      }
        return (
            <div className='signupdiv'>
              <h2>Sign up</h2>
              <Form className='signup'>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Confirm Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
            </div>
        );
    }
}

export default Signup;