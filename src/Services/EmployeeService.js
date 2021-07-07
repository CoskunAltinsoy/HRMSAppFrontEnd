import axios from "axios";

export default class EmployeeService{
    getEmployee(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }
}