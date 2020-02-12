import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Signup.css';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {signInFlag: false, validationFlag:false}

  signUpData = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    image:'' //!add anonymous pic src as default
}
  getInputsData = (e)=>{
    this.signUpData[e.target.name] = e.target.value; // get every input data (w onChange)
    if(e.target.name === 'image') return this.signUpData[e.target.name] = e.target.files[0];
  }

  signUpRequest = (e)=>{

    let formData = new FormData();
    formData.append('userFile',this.signUpData.image);
    formData.append('name',this.signUpData.name);
    formData.append('email',this.signUpData.email);
    formData.append('password',this.signUpData.password);
    formData.append('confirmPassword',this.signUpData.confirmPassword);
    
    e.preventDefault()
    if (this.signUpData.password === this.signUpData.confirmPassword && !this.signUpData.name.match(/ /g)) {
       e.preventDefault();
         axios.post('/users/register', formData )
        .then((response)=> {
          if (response.status === 201) {   
           this.setState({signInFlag:true})
          }
        })
        .catch((error)=> {
          console.log(error);
        });
    }else{
      this.setState({validationFlag:true})      
    e.preventDefault()
  }
   
        
  }
    render() {      
      if(this.state.signInFlag) {
        return <Redirect to="Login"/>
      }
        return (
          
            <div className='signupdiv'>
              {this.state.validationFlag ?
                   <Alert variant='warning' onClick={()=>this.setState({validationFlag:false})}>  
                        Please try again. Make sure user name doesn't contains blank spaces,
                        make sure user contains only alphanumeric symbols
                        and that the passwords match   
                        <p>
                       <Alert.Link >Click here to close this window</Alert.Link>
                      </p>
                    </Alert> : ''} 
           

                <h2>Sign up</h2>
              <Form onSubmit={(e)=>this.signUpRequest(e)} className='signup'>

              <Form.Group as={Row} controlId="formHorizontalUserName">
                <Form.Label column sm={2}>
                  User Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control onChange={(e)=>this.getInputsData(e)} minLength="3" name="name" type="text" placeholder="User Name" required/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control onChange={(e)=>this.getInputsData(e)} minLength="5" name="email" type="email" placeholder="Email" required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" onChange={(e)=>this.getInputsData(e)} minLength="4" name="password"   placeholder="Password" required />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Confirm Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" onChange={(e)=>this.getInputsData(e)} minLength="4" name="confirmPassword"   placeholder="Confirm Password" required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalUserName">
                <Form.Label column sm={2}>
                  Profile Image <i className="fa fa-image"></i>
                </Form.Label>
                <Col sm={10}>
                  <Form.Control onChange={(e)=>this.getInputsData(e)} minLength="3" name="image" type="file" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button className='buttons' type="submit">Sign Up</Button>
                  <Button className='buttons' name="signUp" onClick={this.props.returnToHome} >Return</Button>
                </Col>
              </Form.Group>
            </Form>
            </div>
        );
    }
}

export default Signup;