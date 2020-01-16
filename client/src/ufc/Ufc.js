import React, { Component } from 'react';
import axios from 'axios';

export default class Ufc extends Component {
    state = {info:[]}
    render() {
        return (
            <div>
                this is ufc page
            </div>
        )
    }
    componentDidMount(){
        axios.get('/ufc/Khabib')
        .then((response)=> {
            console.log(response);
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}
