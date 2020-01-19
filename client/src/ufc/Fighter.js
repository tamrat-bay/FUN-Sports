import React, { Component } from 'react';
import axios from 'axios';
import './Fighter.css'

export default class Fighter extends Component {
   state = {name:'',age:'',class:'',img:'',record:'',nickname:''}
    render() {
        return (
            <div className="Fighter">
                   <h2>{this.state.name}</h2>
                    <h3>{this.state.nickname}</h3>
                    <p>Is Ufc Fighter at {this.state.class} devision</p>
                    <img src={this.state.img} alt={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        axios.get(`/ufc/${this.props.name}`)
        .then((response)=> {
            console.log(response.data);
            let data = response.data
            this.setState({name:data.name, age:data.age , class:data.weight_class,img:`https://www.sherdog.com${data.image_url}`,nickname:data.nickname})
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}
