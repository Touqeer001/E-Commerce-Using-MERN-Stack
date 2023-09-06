import axios from 'axios';


const url='http://localhost:8000';


// the function authenticateLogin is designed to make an asynchronous POST request to a login API endpoint using Axios. 
//If the request is successful, it returns the promise that Axios returns. If there's an error during the request, 
//the error is caught and logged to the console. The function can be used elsewhere in your code to handle authentication/login requests.
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${url}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}
//api for signup user

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
 
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}


