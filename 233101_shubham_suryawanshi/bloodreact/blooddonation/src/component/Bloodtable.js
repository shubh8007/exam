import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Bloodservice from '../services/Bloodservice'


class BlodTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { blood: [] }
    }

    fetchdata() {
        Bloodservice.insertBlood().then(() => {
            console.log("in fetch")
        }).catch((err) => {
            console.log("error occured in fetch data method" + JSON.stringify(err))
        })
    }

    componentDidMount() {
        this.fetchdata()

    }
    render() {
        return (
            <div>
                <table align="centre" border="2">
                    <tr>
                        <thead>
                            <th>donorname</th>
                            <th>adress</th>
                            <th>bloodgroup</th>
                            <th>mobileno</th>
                            <th>gender</th>

                        </thead>
                    </tr>
                    <tbody>
                        {this.state.blood.map((b) =>
                            <tr>
                                <td>b.donorname</td>
                                <td>b.adress</td>
                                <td>b.bloodgroup</td>
                                <td>b.mobileno</td>
                                <td>b.gender</td>
                                <button type="button" id="btn" name="btn" value={this.componentDidMount} onClick={() => this.componentDidMount}>add</button>
                            </tr>


                        )}
                    </tbody>
                </table>
                <button type="button" name="btn" id="btn"> <Link to={"/BloodFrom"}></Link>AddDonor</button>
            </div>
        )
    }

}
export default BlodTable;