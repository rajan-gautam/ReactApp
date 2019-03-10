

import React, {Component} from 'react';
import axios from 'axios';
import MainContainer from './MainContainer'

class Teams extends Component {
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
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, index) => {
                            return (
                                <tr>
                                    <td key = {index}>{team.TeamName}</td>
                                    <td key = {index}> {team.Projects.map((project, index) => {
                                            return (
                                                <ul key={index}><li>{project.ProjectName}</li> </ul>
                                            )
                                        })}
                                    </td>
                                    <td key = {index}>{team.Employees.length} Employees</td>
                                    <td key = {index}>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Teams;