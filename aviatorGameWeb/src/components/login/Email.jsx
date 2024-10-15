import React, { useState ,useContext, useEffect, useRef } from 'react'
// import { AuthContext } from "../../context/AuthContext"; // Corrected import path// Corrected import path
import { useNavigate } from "react-router-dom";
import { IoMdEyeOff } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import "jquery-validation";
import.meta.env.VITE_APP_BACKEND_URL;
export default function Email() {
  const [email, setEmail] = useState()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [passEye, setPassEye] = useState("");
  //  const { setAuth } = useContext(AuthContext);
   const token = Cookies.get("jwt");
  const navigate = useNavigate();


  // useEffect(() => {
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  const validateLoginForm = () => {
    $("#loginform").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address",
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
        body: JSON.stringify({ email, password }),
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
        localStorage.removeItem('redirectAfterLogin');
        setTimeout(() => {
          navigate(redirectPath);
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
        <p className='text-white font-medium'>Your Email Id*</p>
        <div className='border-2 border-red-700 p-1 rounded-sm'>
        <input
          type='email'
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your Email Id'
          className='bg-transparent outline-none flex-grow text-white'
          required
        />
        </div>
      </div>
      <br></br>
      <div className='border-2 border-red-700 p-1 rounded-sm flex items-center'>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='Password*'
          name="password"
          id="password"
          className='bg-transparent outline-none flex-grow text-white'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='button' onClick={togglePasswordVisibility} className='text-white ml-2'>
          {passwordVisible ? <IoEye className='text-sky-500'/> : <IoMdEyeOff className='text-sky-500'/>}
        </button>
      </div>
      <br></br>
      <div className='flex justify-between text-white items-center'>
        <span className='flex gap-1 items-center'>
          <input type="checkbox" name="" id=""   onChange={(e) => setPassword(e.target.value)} className='border border-red-600'/>
          <p className='text-xs'>Remember me</p>
        </span>
        <Link to={'/password-reset'}><p className='text-sm text-sky-300'>Forgot Password ?</p></Link>
      </div>
      <button type="submit"    onClick={handleSubmit} className='bg-red-600 text-white uppercase p-2 font-medium'>Login</button>
      </form>
      <div className='flex flex-col justify-center text-white mt-4 gap-2'>
        <p className='text-sm mx-auto'>Log In Via</p>
        <div className='flex justify-between gap-3 mb-4'>
          <button className='bg-sky-200 text-sky-600 p-2 w-full rounded-sm text-md'>Google</button>
          <button className='bg-sky-200 text-sky-600 p-2 w-full rounded-sm text-md'>Telegram</button>
        </div>
      </div>
      <p className='text-sm text-white mx-auto my-6'>Don't have an account? <Link to={'/register'} className='text-sky-400'>Register</Link></p>
     
    </div>
  )
}
