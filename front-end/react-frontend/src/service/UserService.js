import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user/getAll"

class UserService{

    getAll(){
        axios.get(USER_API_BASE_URL);
    }
    
}

export default new UserService();