import React, { Component } from 'react';
import './TeamLogo.css'
import axios from 'axios';

class TeamLogo extends Component {
    state = {teamsData: [], info: false, singleTeamData: {}}
    render() {

        const teams = [
        'img/nbateamslogo/ATL_logo.svg' ,'img/nbateamslogo/BKN_logo.svg', 'img/nbateamslogo/BOS_logo.svg', 'img/nbateamslogo/CHA_logo.svg',
        'img/nbateamslogo/CHI_logo.svg', 'img/nbateamslogo/CLE_logo.svg', 'img/nbateamslogo/DAL_logo.svg' ,'img/nbateamslogo/DEN_logo.svg',
        'img/nbateamslogo/DET_logo.svg', 'img/nbateamslogo/GSW_logo.svg', 'img/nbateamslogo/HOU_logo.svg', 'img/nbateamslogo/IND_logo.svg', 'img/nbateamslogo/LAC_logo.svg',
        'img/nbateamslogo/LAL_logo.svg', 'img/nbateamslogo/MEM_logo.svg', 'img/nbateamslogo/MIA_logo.svg', 'img/nbateamslogo/MIL_logo.svg', 'img/nbateamslogo/MIN_logo.svg',
        'img/nbateamslogo/NOP_logo.svg','img/nbateamslogo/NYK_logo.svg', 'img/nbateamslogo/OKC_logo.svg', 'img/nbateamslogo/ORL_logo.svg',
        'img/nbateamslogo/PHI_logo.svg', 'img/nbateamslogo/PHX_logo.svg', 'img/nbateamslogo/POR_logo.svg', 'img/nbateamslogo/SAC_logo.svg', 'img/nbateamslogo/SAS_logo.svg',
        'img/nbateamslogo/TOR_logo.svg', 'img/nbateamslogo/UTA_logo.svg', 'img/nbateamslogo/WAS_logo.svg'
        ];

        const getData = (evant) =>
        { 
            
           let abb = evant.split('/')[2].split('_')[0];
           let compareTeams = this.state.teamsData.filter(t => t.abbreviation === abb);
           compareTeams[0].img = evant;
           this.setState({singleTeamData: compareTeams[0]});
        }
        
        return (
            <div >
                <h3 className='logo-title'>NBA Teams</h3>
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
                    <p onClick={() => this.setState({info: false})} className='exit-btn'><i class="fa fa-times-circle"></i></p>
                    
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