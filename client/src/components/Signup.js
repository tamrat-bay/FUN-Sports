import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Homepage from './Homepage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Signup.css';
import axios from 'axios';
import Login from './Login';
// import { Redirect } from "react-router-dom";
// import Main from './Main';

class Signup extends Component {
  state = {buttonflag: false}
  signUpData = {
    name:'',
    email:'',
    password:'',
    confirmPassword:''
}
  getInputsData = (e)=>{
    if (e.target.type === 'email') return this.signUpData.email = e.target.value;
    if(e.target.type === 'text') return this.signUpData.name = e.target.value;
    if(e.target.placeholder === 'Password') return this.signUpData.password = e.target.value ;
    if(e.target.placeholder === 'Confirm Password') return this.signUpData.confirmPassword = e.target.value ;
  }
  signUpRequest = (e)=>{
    console.log(this.signUpData);
 
    if (this.signUpData.password === this.signUpData.confirmPassword) {
       e.preventDefault();
         axios.post('/users/register', this.signUpData)
        .then((response)=> {
          // console.log(response.data,'resdata');
          if (response.status === 201) {   
           
           this.setState({buttonflag:true})
          }
        })
        .catch((error)=> {
          console.log(error);
        });
    }else{
    e.preventDefault()
  }
   
        
  }
    render() {      
      if(this.state.buttonflag) {
        return <Login/>
      }
        return (
            <div className='signupdiv'>
                <h2>Sign up</h2>
              <Form onSubmit={(e)=>this.signUpRequest(e)} className='signup'>

              <Form.Group as={Row} controlId="formHorizontalUserName">
                <Form.Label column sm={2}>
                  User Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control onChange={(e)=>this.getInputsData(e)} minLength="3" type="text" placeholder="User Name" required/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control onChange={(e)=>this.getInputsData(e)} minLength="5" type="email" placeholder="Email" required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" onChange={(e)=>this.getInputsData(e)} minLength="4"  placeholder="Password" required />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Confirm Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" onChange={(e)=>this.getInputsData(e)} minLength="4"  placeholder="Confirm Password" required />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Sign Up</Button>
                  <Button name="signUp" onClick={this.props.returnToHome} >Return</Button>
                </Col>
              </Form.Group>
            </Form>
            </div>
        );
    }
}

export default Signup;