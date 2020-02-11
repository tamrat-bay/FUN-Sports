import React, { Component } from 'react'
import './FightersDetails.css';
import Table from 'react-bootstrap/Table'
export default class FightersDetails extends Component {
    render() {
     const {backToUfcPage,data} = this.props        
        return (
            <div className="FightersDetails">
                <div className="FightersDetails_Icon" onClick={()=>backToUfcPage()}> <i class="fa fa-times-circle"></i></div>
               
                <div className="FightersDetails_flex" >
                <div className="FightersDetails_img" >
                    <img className='ftr_img' src={`https://www.sherdog.com${data.image_url}`} alt={data.name} />
                </div>
                <div className="FightersDetails_Detailes">
                <h1>{data.name} {data.nickname.length > 0 ? `(${data.nickname})`: ''}</h1>
                <h4>UFC Fightr in the {data.weight_class} devision</h4>
                <p>Stands at {data.height} ft tall and weigs in at {data.weight} LBS</p>
                <p>{data.name} is from {data.nationality} and currently stays in {data.locality}</p>
                <h4>MMA Record</h4>
                <p>{data.wins.total} - Wins and {data.losses.total} - Losess</p>
                <p>{data.wins.knockouts} Wins came via knckouts , {data.wins.submissions} via submissions and {data.wins.decisions} via decisions</p>
                <p>{data.losses.knockouts} losses came via knckouts , {data.losses.submissions} via submissions and {data.losses.decisions} via decisions</p>
                <h4>Last Fights</h4>
                <div className="FightersDetails_Table">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Result</th>
                        <th>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                       {data.fights.map((f,i)=>
                        <tr key={i}>
                            <td>{f.name.split('-')[0]}</td>
                            <td>{f.date}</td>
                            <td>{f.opponent}</td>
                            <td>{f.result}</td>
                            <td>{f.method}</td>
                        </tr>
                        )}
                    </tbody>
                    </Table></div>
                </div>
                </div>
            </div>
        )
    }

}
