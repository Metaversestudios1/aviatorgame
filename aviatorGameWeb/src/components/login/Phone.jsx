import React, { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoGoogle, IoMdEyeOff } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'

export default function Phone() {
  const [phone, setPhone] = useState()
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <p className='text-white font-medium'>Your Phone number*</p>
        <div className='border-2 border-red-700 p-1 rounded-sm'>
        <PhoneInput
      placeholder="Enter phone number"
      value={phone}
      onChange={setPhone} className='custom-phone-input'/>
        </div>
      </div>
      <div className='border-2 border-red-700 p-1 rounded-sm flex items-center'>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder='Password*'
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
        <Link><p className='text-sm text-sky-300'>Forgot Password ?</p></Link>
      </div>
      <button className='bg-red-600 text-white uppercase p-2 font-medium'>Login</button>
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
