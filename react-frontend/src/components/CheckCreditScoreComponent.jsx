import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class CheckCreditScoreComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            citizenshipNumber:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeCitizenshipNumberHandler = this.changeCitizenshipNumberHandler.bind(this);
        this.checkCreditScore = this.checkCreditScore.bind(this);
    }


    //CHANGEFIRST
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeCitizenshipNumberHandler= (event) => {
        this.setState({citizenshipNumber: event.target.value});
    }

    
    //COMPONENTDIDMOUNT
    // componentDidMount(){
       
    //         EmployeeService.getUserCreditScore(this.state.citizenshipNumber).then( (res) =>{
    //             let employee = res.data;
    //             this.setState({firstName: employee.firstName,
    //                 lastName: employee.lastName,
    //                 citizenshipNumber : employee.citizenshipNumber
    //             });
    //         });
               
    // }

    checkCreditScore = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, citizenshipNumber: this.state.citizenshipNumber};
        console.log('employee => ' + JSON.stringify(employee));
        // step 5
        
            EmployeeService.getCalculateUserCreditScore(employee.citizenshipNumber).then(res =>{
            this.props.history.push(`/deneme/${employee.citizenshipNumber}`);
            });

            
        
    }

    //GETTITLE
    getTitle(){
            return <h3 className="text-center">Check Credit Limit</h3>  
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
                                            <label> Citizenship Number: </label>
                                            <input placeholder="Citizenship Number" name="citizenshipNumber" className="form-control" 
                                                value={this.state.citizenshipNumber} onChange={this.changeCitizenshipNumberHandler}/>
                                        </div> 
                                        <button className="btn btn-success" onClick={this.checkCreditScore} >Check</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
    
}

export default CheckCreditScoreComponent
