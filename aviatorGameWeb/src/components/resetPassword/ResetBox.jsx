import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import reset from './../../assets/images/forgot_password/reset-password-icon.png'
import { toast } from 'react-toastify'
import { resetForgotPassword } from '../../services/api'

export default function ResetBox({email}) {
  const navigate = useNavigate()
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleResetPassword = async()=>{
    if(newPassword  !== confirmPassword){
      toast.error('Password must be same!');
      return;
    }
    setLoading(true)
    try {
      const response = await resetForgotPassword(email,newPassword);
      if(response.status===200){
        toast.success('Password reset successfully!')
        setLoading(false)
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data?.message)
    }
  }

  return (
    <div className=" bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center p-4 rounded-xl gap-6 px-10">
        <img src={reset} alt="finger" className="w-14" />
        <h3 className="text-xl text-red-600 font-bold">Set new password</h3>
        <p className="text-blue-300 text-md">
          Must be atleast 6 characters 1 numeric and 1 alphabet
        </p>
        <div className="flex flex-col gap-2 w-full">
          <div className='flex flex-col gap-2'>
          <p className="text-white font-medium">Password</p>
          <div className="border-2 border-red-700 p-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter new password"
              className="bg-transparent outline-none flex-grow text-white w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          </div>
          <div className='flex flex-col gap-2'>
          <p className="text-white font-medium">Confirm Password</p>
          <div className="border-2 border-red-700 p-1 rounded-sm">
            <input
              type="text"
              placeholder="Re-enter password"
              className="bg-transparent outline-none flex-grow text-white w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-500 text-white p-3 font-bold my-2 rounded-lg w-full" onClick={handleResetPassword}>
          Reset Password
        </button>
        <Link
          to={"/"}
          className="flex items-center gap-2 text-blue-300 font-medium"
        >
          <FaArrowLeft />
          <p>Back To Log In</p>
        </Link>
        <div className='grid grid-rows-1 grid-cols-3 gap-3'>
          <span className='w-16 h-3 bg-blue-200 rounded-full'></span>
          <span className='w-16 h-3 bg-blue-200 rounded-full'></span>
          <span className='w-16 h-3 bg-blue-400 rounded-full'></span>
        </div>
      </div>
  )
}
