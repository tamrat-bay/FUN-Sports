import React, { Component } from 'react';
import './TeamLogo.css'
import axios from 'axios';
// import { MDBCloseIcon } from "mdbreact";

class TeamLogo extends Component {
    state = {teamsData: [], info: false, singleTeamData: {}, loading: '', abb: ''}
    render() {

        let teams = [
        'logo/ATL_logo.svg' ,'logo/BKN_logo.svg', 'logo/BOS_logo.svg', 'logo/CHA_logo.svg',
        'logo/CHI_logo.svg', 'logo/CLE_logo.svg', 'logo/DAL_logo.svg' ,'logo/DEN_logo.svg',
        'logo/DET_logo.svg', 'logo/GSW_logo.svg', 'logo/HOU_logo.svg', 'logo/IND_logo.svg', 'logo/LAC_logo.svg',
        'logo/LAL_logo.svg', 'logo/MEM_logo.svg', 'logo/MIA_logo.svg', 'logo/MIL_logo.svg', 'logo/MIN_logo.svg',
        'logo/NOP_logo.svg','logo/NYK_logo.svg', 'logo/OKC_logo.svg', 'logo/ORL_logo.svg',
        'logo/PHI_logo.svg', 'logo/PHX_logo.svg', 'logo/POR_logo.svg', 'logo/SAC_logo.svg', 'logo/SAS_logo.svg',
        'logo/TOR_logo.svg', 'logo/UTA_logo.svg', 'logo/WAS_logo.svg'
        ];

        const getData = (evant) =>
        { 
            
           let abb = evant.split('/')[1].split('_')[0];
           console.log(abb);
           let compareTeams = this.state.teamsData.filter(t => t.abbreviation === abb);
           compareTeams[0].img = evant;
           console.log(compareTeams[0]);
           this.setState({singleTeamData: compareTeams[0]});
        }
        
        return (
            <div >
                <h3>NBA Teams</h3>
                <div className='logos'>
                    {teams.map((team, i) => <img
                    key={i}
                    alt='logo' 
                    src={team}
                    onClick={()=>{
                        getData(team);
                        this.setState({info: true})}} ></img>)}
                </div>
               
                {this.state.info ? <div className='team-info'>
                    <p onClick={() => this.setState({info: false})} className='exit-btn'>exit</p>
                    
                    <img className='logo-in-div' alt='logo' src={this.state.singleTeamData.img}></img>

                    <h4>{this.state.singleTeamData.full_name}</h4>
                    <h4>{this.state.singleTeamData.division} division</h4>
                    <h4>{this.state.singleTeamData.conference}ern Conference</h4>

                    </div> : ''}
            </div>
        );
    }
    componentDidMount()
    {
        axios.get('https://www.balldontlie.io/api/v1/teams/')
        .then(res => {
            this.setState({teamsData:res.data.data});
            // console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default TeamLogo;