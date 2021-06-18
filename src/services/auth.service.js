import axios from 'axios';

const API_URL = "http://localhost:5000/auth/";

class AuthService {
    login(username, password) {
      return axios
        .post(API_URL + "login", {
          email: username,
          password: password
        })
        .then(response => {
          alert(response.data.message)
          if (response.data.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
          }
          return response.data.data;
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
  
    logout() {
      localStorage.removeItem("user");
    }
  
    register(email, password, fullName) {
      return axios.post(API_URL + "registerCustomer", {
        email: email, password: password, fullName: fullName
      })
      .then(response => {
        alert(response.data.message)
        console.log("message: " + response.data.message)
      })
      .catch(error => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        alert(resMessage);
      });;
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));;
    }
  }
  
  export default new AuthService();