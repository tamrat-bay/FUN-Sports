import React, { Component } from 'react';
import './Login.css'
// import Homepage from './Homepage';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Mainpage from './Mainpage'

class Login extends Component {
    state = {btnFlag:false,user:localStorage}
    
    loginData = {
        email:'',
        password:''
    }
    getInputsData = (e,type)=>{
      return type === 'email' ?this.loginData.email = e.target.value :
      this.loginData.password = e.target.value 
    }
    changeState = ()=>{
        this.setState({btnFlag:true})
        console.log(this.state.btnFlag,'inside func');
    }
    loginRequest = (e)=>{
        e.preventDefault();
        axios.post('/users/login/', this.loginData)
          .then((response)=> {
            console.log(response.data,'resdata');
            if (response.status === 200) {   
                // console.log(this.state.btnFlag);          
                localStorage.name = response.data.name;
                localStorage.token =response.data.token;
               this.setState({btnFlag:true,user: localStorage})
            }
          })
          .catch((error)=> {
            console.log(error);
          });
          
    }
    render() {
        if(this.state.btnFlag) {
            return <Mainpage />
        }
        return (
            <div className='Login'>
                <h2>Login</h2>
                <Form onSubmit={(e)=>this.loginRequest(e)} className="Login_form">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" onChange={(e)=>this.getInputsData(e,'email')} placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" onChange={(e)=>this.getInputsData(e,'password')} placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{span: 10, offset: 2 }}>
                        <Button type="submit" >Login</Button>
                        <Button name="login" onClick={this.props.returnToHome} >Return</Button>
                        </Col>
                    </Form.Group>
                    </Form>
            </div>
        );
    }
}

export default Login;