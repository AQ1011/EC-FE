import axios from 'axios';
import AuthHeader from "../services/auth-header";

const API_URL = "https://backend-ec18a007.herokuapp.com/admin/";

class AdminService {
    getUser(id) {
        return axios
        .get(API_URL + "getUser", {
            id: id,
            headers: AuthHeader()
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {          
          const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log("Error getting user: " + resMessage);
        });
    }
}

export default new AdminService();