import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer'

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

 componentDidMount() {
        axios.get("https://fathomless-eyrie-56719.herokuapp.com/employees")
        .then((res) => {
            this.setState({
                employees: res.data
            });
        }).catch((err) => {
            console.log(err)
        });
    }


    render() {
        return (
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name & Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, index) => {
                            return (
                                <tr>
                                    <td key = {index}>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                    <td key = {index}>{employee.AddressStreet} {employee.AddressState} {employee.AddressCity} {employee.AddressZip}</td>
                                    <td key = {index}>{employee.PhoneNum} ex: {employee.Extension}</td>
                                    <td key = {index}>{moment(employee.HireDate).utc().format('LL')}</td>
                                    <td key = {index}>$ {employee.SalaryBonus}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Employees;