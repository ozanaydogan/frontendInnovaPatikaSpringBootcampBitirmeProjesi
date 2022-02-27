import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class CheckCreditScoreScreenComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            citizenshipNumber: this.props.match.params.citizenshipNumber,
            employee:{ 
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber:'',
            salary:0,
            creditStatus:false,
            creditScore:'',
            creditLimit:''}
        }
    }

    //componentDidMount
    componentDidMount(){   
        EmployeeService.getUserCreditScore(this.state.citizenshipNumber).then( res => {
           this.setState({employee: res.data});
                console.log('employee => ' + JSON.stringify(res.data));
            
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
                        <div className = "row">
                            <label> User Credit Status: </label>
                            <div> { this.state.employee.creditStatus.toString() }</div>
                        </div>
                        <div className = "row">
                            <label> User Credit Limit: </label>
                            <div> { this.state.employee.creditLimit }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CheckCreditScoreScreenComponent
