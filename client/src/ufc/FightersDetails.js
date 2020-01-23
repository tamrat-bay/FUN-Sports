import React, { Component } from 'react'
import './FightersDetails.css';

export default class FightersDetails extends Component {
    render() {
        const {backToUfcPage} = this.props        
        return (
            <div className="FightersDetails">
                <h3 onClick={()=>backToUfcPage()}>Close Icon</h3>
                <h1>Name , Nick Name</h1>
                <h2>Height Weight Division</h2>
                <div>
                <img />
                </div>
            </div>
        )
    }
}
