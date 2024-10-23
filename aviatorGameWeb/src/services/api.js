import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_BACKEND_URL; 
// const apiUrl = "https://aviatorgame-web.vercel.app"; 
console.log(apiUrl);

// send email sign up otp
export const sendEmailSignUpOtp = async (email) => {
    try {
        const response = await axios.post(`${apiUrl}/api/sendmailsms`,{email});
        return response;
    } catch (error) {
        throw error
    }
}
// confirm signup Email otp
export const  confirmSignUpEmailOtp = async (email,otp) => {
    try {
        const response = await axios.post(`${apiUrl}/api/verifyotpreg`,{email,otp});
        return response
    } catch (error) {
        throw error
    }
}
// create user
export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${apiUrl}/api/insertuser`,userData);
        return response
    } catch (error) {
        throw error
    }
}
// Login by email
export const loginByEmail = async (email, password) => {
    try {
        const response =await  axios.post(`${apiUrl}/api/userlogin`,{email,password});
        return response
    } catch (error) {
        throw error
        
    }
}
// forget password otp send
export const forgetPasswordSendOtp = async(email)=>{
    try {
        const response = await axios.post(`${apiUrl}/api/sendotp`,{email});
        return response
    } catch (error) {
        throw error
    }
}
// verify forgot password otp
export const verifyForgotPasswordOtp = async (email,otp) => {
    try {
        const response = await axios.post(`${apiUrl}/api/verifyOtp`,{email,otp});
        return response
    } catch (error) {
        throw error
    }
}
// reset Password
export const resetForgotPassword = async(email,newPassword)=>{
    try {
        const response = await axios.post(`${apiUrl}/api/resetPassword`,{email,newPassword});
        return response
    } catch (error) {
        throw error
    }
}
// create manual deposite
export const createManualDeposit = async (userData) => {
    try {
        const response = await axios.post(`${apiUrl}/api/createmanualpayment`,userData);
        return response
    } catch (error) {
        throw error
    }
}