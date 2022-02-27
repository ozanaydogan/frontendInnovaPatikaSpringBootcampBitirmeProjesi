import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    //componentDidMount
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    //RENDER
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> User Email: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> User CitizenshipNumber: </label>
                            <div> { this.state.employee.citizenshipNumber }</div>
                        </div>
                        <div className = "row">
                            <label> User Phone Number: </label>
                            <div> { this.state.employee.phoneNumber }</div>
                        </div>
                        <div className = "row">
                            <label> User Salary: </label>
                            <div> { this.state.employee.salary }</div>
                        </div>
                        <div className = "row">
                            <label> User Credit Score: </label>
                            <div> { this.state.employee.creditScore }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
