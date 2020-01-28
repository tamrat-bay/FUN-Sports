import React, { Component } from 'react';
import axios from 'axios';
import './Fighter.css'

export default class Fighter extends Component {
   state = {fighter:{}}
    render() {
        const {fighterDetailes} = this.props;
        // console.log(this.props);
        
        return (
            <div className="Fighter" id={this.props.name} onClick={(e)=>fighterDetailes(e,this.state.fighter)}>
                   <h2>{this.state.fighter.name}</h2>
                    <h3>{this.state.fighter.nickname}</h3>
                    <p>Is Ufc Fighter in the {this.state.fighter.class} devision</p>
                    <img src={`https://www.sherdog.com${this.state.fighter.image_url}`} alt={this.state.fighter.name}/>
            </div>
        )
    }
    componentDidMount(){
        axios.get(`/ufc/${this.props.name}`)
        .then((response)=> {
            // console.log(response.data);
            this.setState({fighter:response.data})})
        .catch((error)=> {
            console.log(error);
        });
    }
}
