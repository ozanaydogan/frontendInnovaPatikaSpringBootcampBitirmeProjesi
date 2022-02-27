import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            citizenshipNumber:'',
            phoneNumber:'',
            salary:0
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.changeCitizenshipNumberHandler = this.changeCitizenshipNumberHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeUserSalaryHandler = this.changeUserSalaryHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    }


    //CHANGEFIRST
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeCitizenshipNumberHandler= (event) => {
        this.setState({citizenshipNumber: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeUserSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }


    // step 3
    //COMPONENTDIDMOUNT
    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId,
                    citizenshipNumber : employee.citizenshipNumber,
                    phoneNumber : employee.phoneNumber,
                    salary : employee.salary
                });
            });
        }        
    }

    //KAYDET
    saveOrUpdateEmployee = (e) => { 
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, 
            citizenshipNumber: this.state.citizenshipNumber, phoneNumber: this.state.phoneNumber, salary: this.state.salary};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }

    //CANCEL
    cancel(){
        this.props.history.push('/employees');
    }

    //GETTITLE
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Register User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }

    //RENDER
    render() {
        return (
            <div> <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {this.getTitle()}
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CitizenshipNumber: </label>
                                            <input placeholder="Citizenship Number" name="citizenshipNumber" className="form-control" 
                                                value={this.state.citizenshipNumber} onChange={this.changeCitizenshipNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PhoneNumber: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> UserSalary: </label>
                                            <input placeholder="User Salary" name="userSalary" className="form-control" 
                                                value={this.state.salary} onChange={this.changeUserSalaryHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}
export default CreateEmployeeComponent
