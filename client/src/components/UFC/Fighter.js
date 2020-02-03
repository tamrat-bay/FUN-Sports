import React, { Component } from 'react';
import axios from 'axios';
import './Fighter.css';
import Spinner from 'react-bootstrap/Spinner';


export default class Fighter extends Component {
   state = {fighter:{}, loading: ''}
    render() {
        const {fighterDetailes,dev} = this.props;
        // console.log(this.props);

     
        if (dev) {
            return  dev === this.state.fighter.weight_class ? 
        (
         
            <div className="Fighter" id={this.props.name} onClick={(e)=>fighterDetailes(e,this.state.fighter)}>
                <h2>{this.state.fighter.name}</h2>
                <h3>{this.state.fighter.nickname}</h3>
                <p>Is Ufc Fighter in the {this.state.fighter.class} devision</p>
                <img src={`https://www.sherdog.com${this.state.fighter.image_url}`} alt={this.state.fighter.name}/>
            </div>
        ):
     null
    
        }
         return(
            <div className="Fighter" id={this.props.name} onClick={(e)=>fighterDetailes(e,this.state.fighter)}>
            {this.state.loading}
            <h2>{this.state.fighter.name}</h2>
            <h3>{this.state.fighter.nickname}</h3>
            <p>Is Ufc Fighter in the {this.state.fighter.weight_class} devision</p>
            <img src={`https://www.sherdog.com${this.state.fighter.image_url}`} alt={this.state.fighter.name}/>
           </div>
         )
    }
    componentDidMount(){
        this.setState({loading: <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>})
        axios.get(`/ufc/${this.props.name}`)
        .then((response)=> {
            if(response.status === 200)
            {
                this.setState({fighter: response.data})  
            }
        this.setState({loading: ''})
           
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}
