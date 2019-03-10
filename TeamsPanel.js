import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TeamsPanel extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get("https://fathomless-eyrie-56719.herokuapp.com/teams")
        .then((res) => {
            this.setState({
                teams: res.data
            });
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr>
                                            <td key = {index}>{team.TeamName}</td>
                                            <td key = {index}>{team.Employees.length} Employees</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        );
    }
}

export default TeamsPanel;