import React, {Component} from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';
import moment from 'moment';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        // ajax call
        axios.get("https://fathomless-eyrie-56719.herokuapp.com/projects")
        .then((res) => {
            this.setState({
                projects: res.data
            });
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        return (
           
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((element, index) => {
                            return (
                                <tr>
                                    <td key = {index}>{element.ProjectName}</td>
                                    <td key = {index}>{element.ProjectDescription}</td>
                                    <td key = {index}>{moment(element.ProjectStartDate).utc().format("LL")}</td>
                                    <td key = {index}>{(element.ProjectEndDate === null ? 'n/a' : moment(element.ProjectStartDate).format("LL"))}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Projects;