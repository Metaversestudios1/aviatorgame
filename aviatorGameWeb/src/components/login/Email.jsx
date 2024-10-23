import React, { useState } from 'react'
import { IoMdEyeOff } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { loginByEmail } from '../../services/api'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'


export default function Email() {
  const [email, setEmail] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  // login email
  const handleLoginEmail = async () => {
    if (!email || !password) {
      toast.error('Fill all fields!');
      return;
    }
    setLoading(true)
    try {
      const response = await loginByEmail(email, password);
      console.log(response);
  
      // Check if the response is successful
      if (response?.data?.success) {
        // Store token in cookies
        Cookies.set('token', response.data.token, { expires: 7 }); // Set token with 7-day expiry
        
        // Store user data in cookies
        Cookies.set('user', JSON.stringify(response.data.user), { expires: 7 });
  
        toast.success('Login successful!');
        navigate('/home');
        setEmail('')
        setPassword('')
      } else {
        toast.error('Login failed!'); 
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred during login.');
    }
    setLoading(false)
  };
  
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <p className='text-white font-medium'>Your Email Id*</p>
        <div className='border-2 border-red-700 p-1 rounded-sm'>
        <input
          type='email'
          placeholder='Enter your Email Id'
          className='bg-transparent outline-none flex-grow text-white w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
      </div>
      <div className='border-2 border-red-700 p-1 rounded-sm flex items-center'>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='Password*'
          className='bg-transparent outline-none flex-grow text-white'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <button className='bg-red-600 text-white uppercase p-2 font-medium' onClick={handleLoginEmail}>Login</button>
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
