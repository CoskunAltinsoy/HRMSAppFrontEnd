import axios from 'axios';

export default class JobAdvertService() {
    getJobAdvert (){
        return axios.get("http://localhost:8080/api/jobadverts/getall")
    }
}
