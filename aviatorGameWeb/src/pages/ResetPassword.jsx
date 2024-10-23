import React, { useState } from 'react'
import BG from './../assets/images/forgot_password/bg.png'
import finger from './../assets/images/forgot_password/figer-print.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import OtpInput from '../components/resetPassword/OtpInput'
import ResetBox from '../components/resetPassword/ResetBox'
import { forgetPasswordSendOtp } from '../services/api'
import { toast } from 'react-toastify'

export default function ResetPassword() {
   const navigate = useNavigate()
   const [email,setEmail] = useState('')
   const [loading,setLoading] = useState(false)

   const handleResetOtp = async()=>{
    if(!email){
      toast.error('Enter user id');
      return ;
    }
    setLoading(true)
    try {
      const response = await forgetPasswordSendOtp(email)
      console.log(response);
      if(response.status===200){
        toast.success(response.data?.message)
        navigate('/password-reset-otp',{ state: { email } })
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    setLoading(false)
   }
  return (
    <div className=' bg-[url("./assets/images/forgot_password/bg.png")] bg-cover bg-no-repeat h-screen w-screen flex justify-center items-center'>
      {/* <img src={BG} alt="background image" className='h-screen w-screen'/> */}
       <div className=" bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center p-4 rounded-xl gap-6 px-10">
        <img src={finger} alt="finger" className="w-14" />
        <h3 className="text-xl text-red-600 font-bold">Forgot Password ?</h3>
        <p className="text-blue-300 text-md">
          No worries, we'll send you reset instractions
        </p>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-white font-medium">Your Email Id*</p>
          <div className="border-2 border-red-700 p-1 rounded-sm">
            <input
              type="email"
              placeholder="Enter your Email Id"
              className="bg-transparent outline-none flex-grow text-white w-full"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-500 text-white p-3 font-bold my-2 rounded-lg w-full" onClick={handleResetOtp} disabled={loading}>
          {loading? 'wait....':'Reset Password'}
        </button>
        <Link
          to={"/"}
          className="flex items-center gap-2 text-blue-300 font-medium"
        >
          <FaArrowLeft />
          <p>Back To Log In</p>
        </Link>
        <div className='grid grid-rows-1 grid-cols-3 gap-3'>
          <span className='w-16 h-3 bg-blue-400 rounded-full'></span>
          <span className='w-16 h-3 bg-blue-200 rounded-full'></span>
          <span className='w-16 h-3 bg-blue-200 rounded-full'></span>
        </div>
      </div>
    </div>
  );
}
