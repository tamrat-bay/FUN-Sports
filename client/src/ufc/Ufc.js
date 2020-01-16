import React, { Component } from 'react'

export default class Ufc extends Component {
    state = {info:[]}
    render() {
        return (
            <div>
                {/* ufc page */}
            </div>
        )
    }
    componentDidMount(){
        fetch('/ufc/Jon Jones')
        .then(res=> res.json())
        .then(info=> this.setState({info}, ()=>console.log('fetced',info)
        ))
    }
}
