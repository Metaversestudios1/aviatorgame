import React, { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoGoogle, IoMdEyeOff } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import "jquery-validation";

export default function Phone() {
  const navigate = useNavigate();
  const [contact, setPhone] = useState()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [passEye, setPassEye] = useState("");
  const validateLoginForm = () => {
    $("#loginform").validate({
      rules: {
        contact: {
          required: true,
          maxlength:10,
          minlength:10
        },
        password: {
          required: true,
        },
      },
      messages: {
        contact: {
          required: "Please enter your contact number",
          minlength: "Please enter a valid contact number",
        },
        password: {
          required: "Please enter your password",
        },
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("invalid-feedback"); // Add error class
        error.insertAfter(element.parent()); // Insert error message after input's parent container
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass("is-invalid").addClass("is-valid");
      },
    });
  
    return $("#loginform").valid();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateLoginForm()) {
      return;
    }
    try {
      // Debugging: Log the API URL
      const apiUrl = import.meta.env.VITE_APP_BACKEND_URL; 
      setLoading(true);
      console.log(apiUrl);
      
      const res = await fetch(`${apiUrl}/api/userlogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact, password }),
      });
      
      const response = await res.json();
      console.log(response);
  
      if (response.success) {
        setLoading(false);
        setError("");
        toast.success("You are logged in Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        Cookies.set("jwt", response.token);
        //setAuth({ isAuthenticated: true, user: response.user });
      
        const redirectPath = localStorage.getItem('redirectAfterLogin') || '/home';
       
        setTimeout(() => {
          navigate(redirectPath);
          localStorage.removeItem('redirectAfterLogin');
        }, 1500);
      } else {
        setLoading(false);
        setError(response.message);
        toast.error(response.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          className: "custom-toast-error", // Apply custom error class
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <div className='flex flex-col gap-3'>
       <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
       <form method="post" id ="loginform">
      <div className='flex flex-col gap-2 relative'>
        <p className='text-white font-medium'>Your Contact number*</p>
        <div className='border-2 border-red-700 p-1 rounded-sm'>
        <input
      placeholder="Enter contact number"
      value={contact}
      name="contact"
      id="contact"
      onChange={(e) => setPhone(e.target.value)} className='custom-phone-input'/>
        </div>
      </div>
      <div className='border-2 border-red-700 p-1 rounded-sm flex items-center'>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='Password*'
           name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className='bg-transparent outline-none flex-grow text-white'
        />
        <button type='button' onClick={togglePasswordVisibility} className='text-white ml-2'>
          {passwordVisible ? <IoEye className='text-sky-500'/> : <IoMdEyeOff className='text-sky-500'/>}
        </button>
      </div>
      <div className='flex justify-between text-white items-center'>
        <span className='flex gap-1 items-center'>
          <input type="checkbox" name="" id=""  className='border border-red-600'/>
          <p className='text-xs'>Remember me</p>
        </span>
        <Link to={'/password-reset'}><p className='text-sm text-sky-300'>Forgot Password ?</p></Link>
      </div>
      <button type="submit"    onClick={handleSubmit}  className='bg-red-600 text-white uppercase p-2 font-medium' >Login</button>
     
     </form>
      <div className='flex flex-col justify-center text-white mt-4 gap-2'>
        <p className='text-sm mx-auto'>Log In Via</p>
        <div className='flex justify-between gap-3 mb-4'>
          <button className='bg-sky-200 text-sky-600 p-2 w-full rounded-sm text-md flex items-center justify-center gap-1'><IoLogoGoogle />Google</button>
          <button className='bg-sky-200 text-sky-600 p-2 w-full rounded-sm text-md flex items-center justify-center gap-1'><FaTelegramPlane />Telegram</button>
        </div>
      </div>
      <p className='text-sm text-white mx-auto my-6'>Don't have an account? <Link to={'/register'} className='text-sky-400'>Register</Link></p>
      {/* Additional styles to ensure the background works */}
      <style jsx>{`
        .custom-phone-input input {
          background-color: transparent !important;
          color: white; 
          outline: none !important;  
          border: none;
        .custom-phone-input input:focus {
          outline: none !important;  
          box-shadow: none; 
        }
      `}
      </style>
    </div>
  )
}
