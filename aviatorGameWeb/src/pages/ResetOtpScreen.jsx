import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import mail from './../assets/images/forgot_password/mail-icon.png'
import OTPInput, { ResendOTP } from "otp-input-react";
import ResetBox from '../components/resetPassword/ResetBox';
import { toast } from 'react-toastify';
import { forgetPasswordSendOtp, verifyForgotPasswordOtp } from '../services/api';

function ResetOtpScreen() {
    const location = useLocation();
    const email = location.state?.email;
    const [verify, setVerify] = useState(false);
    const [OTP, setOTP] = useState("");
    const [loading,setLoading] = useState(false)

   const handleResetOtp = async()=>{
    
    setLoading(true)
    try {
      const response = await forgetPasswordSendOtp(email)
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

    const verifyOtp = async()=>{
      if(OTP.length !== 4){
        toast.error('OTP length should be 4 degite');
        return
      }
      try {
        const response = await verifyForgotPasswordOtp(email,OTP)
        console.log(response);
        if(response.status === 200){
          setVerify(true)
          toast.success('Verify  OTP Successfull')
        }
      } catch (error) {
        toast.error(error.response.data?.message)
      }
    }
  return (
    <div className='bg-[url("./assets/images/forgot_password/bg.png")] bg-cover bg-no-repeat h-screen w-screen flex justify-center items-center'>
     {
        verify ? (<ResetBox email={email}/>) : <div className=" bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center p-4 rounded-xl gap-6 px-10">
        <img src={mail} alt="finger" className="w-14" />
        <h3 className="text-xl text-red-600 font-bold">Password Reset</h3>
        <p className="text-blue-300 text-md">
          We sent a code to {email}
        </p>
        <div className="flex justify-center w-full">
            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} classNames="flex space-x-4" inputClassName="border-2 border-red-600 rounded-lg p-2 text-center w-20 h-20 text-white bg-transparent "/>
        </div>
        <button className="bg-red-600 hover:bg-red-500 text-white p-3 font-bold my-2 rounded-lg w-full" onClick={verifyOtp}>
          Continue
        </button>
        <p className='font-medium text-blue-300'>Didn't receive mail?<span className='text-lg text-white font-semibold cursor-pointer' onClick={!loading? handleResetOtp:null}> {loading?'Please wait':'Click Here'}</span></p>
        <Link
          to={"/"}
          className="flex items-center gap-2 text-blue-300 font-medium"
        >
          <FaArrowLeft />
          <p>Back To Log In</p>
        </Link>
        <div className='grid grid-rows-1 grid-cols-3 gap-3'>
          <span className='w-16 h-3 bg-blue-200 rounded-full'></span>
          <span className='w-16 h-3 bg-blue-400 rounded-full'></span>
          <span className='w-16 h-3 bg-blue-200 rounded-full'></span>
        </div>
      </div>
     }
    </div>
  )
}

export default ResetOtpScreen