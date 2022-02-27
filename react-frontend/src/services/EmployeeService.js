import axios from 'axios';

const USER_API_BASE_URL_1 = "http://localhost:8081/api/v1/users";
const USER_API_BASE_URL_2 = "http://localhost:8081/api/v1/users/citizenshipNumber";

class EmployeeService {

    //LISTE   http://localhost:8081/api/v1/users
    getEmployees(){
        return axios.get(USER_API_BASE_URL_1);
    }

    //FIND  http://localhost:8081/api/v1/users/1
    getEmployeeById(employeeId){
        return axios.get(USER_API_BASE_URL_1 + '/' + employeeId);
    }

    //CREATE    http://localhost:8081/api/v1/users
    createEmployee(employee){
        return axios.post(USER_API_BASE_URL_1, employee);
    }

    //UPDATE   http://localhost:8081/api/v1/users/2
    updateEmployee(employee, employeeId){
        return axios.put(USER_API_BASE_URL_1 + '/' + employeeId, employee);
    }

    //DELETE  http://localhost:8081/api/v1/users/2
    deleteEmployee(employeeId){
        return axios.delete(USER_API_BASE_URL_1 + '/' + employeeId);
    }

    getCalculateUserCreditScore(userCitizenshipNumber){
        return axios.get(USER_API_BASE_URL_2 + '/creditscore/'+ userCitizenshipNumber);
    }

    getUserCreditScore(userCitizenshipNumber){
        return axios.get(USER_API_BASE_URL_2 +'/'+userCitizenshipNumber);
    }
}

export default new EmployeeService()