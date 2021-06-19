import axios from 'axios';
import authHeader from './auth-header';
import AuthService from "../services/auth.service";

const API_URL = "https://backend-ec18a007.herokuapp.com/package/";

class PackageService {
    getAllPackages() {
        return axios
        .get(API_URL + "getPackageCustomer", {
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
          alert(resMessage);
        });
    }
    createPackageCustomer(name, quantity, exp, price) {
      return axios.post(API_URL + "createPackageCustomer", {
        name: name,
        description: quantity,
        expiryDate: exp, 
        cost: price},{
        headers: authHeader()
      }).then(response => {
        return response.data;
      })
      .catch(error => {        
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        alert(resMessage);
      });
    }
}

export default new PackageService();