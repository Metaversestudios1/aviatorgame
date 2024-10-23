import React, { useEffect, useState } from 'react'
import QRcode from './../../assets/images/wallet/QR.png'
import { RxCross2 } from 'react-icons/rx'
import SuccessfulDeposit from './SuccessfulDeposit'
import { createManualDeposit } from '../../services/api'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';

export default function Deposite({onClose}) {
  const [showConfirmation,setShowConfirmation] = useState(false)
  const [success,setSuccess] = useState(false)
  const [amount, setAmount] = useState('')
  const [transactionId, setTransactionId] = useState('')

  const handleSubmit = async()=>{
    
    const userCookie = Cookies.get('user');

    if (userCookie) {
      const user = JSON.parse(userCookie);
      
      // Extract userId
      const userId = user._id;  
    try {
      const userData = {
        user_id:userId,
        amount: amount,
        transactionId: transactionId,
        transactionType:'recharge',
        paymentType:'manual'
      }
      const response = await createManualDeposit(userData)
      if(response.status === 201){
        toast.success('Your Deposite submited.')
        setShowConfirmation(false)
        setSuccess(true)
        setAmount('')
        setTransactionId('')
      }
    } catch (error) {
      console.log(error);
      
      toast.error('Error on submit Deposite')
    }}
    // setShowConfirmation(false)
    // setSuccess(true)
  }
  // close success 
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 2000) // Hide success message after 3 seconds

      return () => clearTimeout(timer) // Clear the timer if component unmounts
    }
  }, [success])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75 z-50">
    <div className="bg-[rgba(0,0,0,0.6)] mt-20 w-[50%] rounded-2xl overflow-hidden">
      <div className='bg-[rgba(0,0,0,0.7)] relative p-4 flex flex-col justify-center'>
          <h2 className="text-xl text-red-600 font-bold mx-auto mb-4">Add Money</h2>
          <RxCross2 className='text-white text-3xl cursor-pointer absolute top-3 right-2' onClick={onClose} />
      </div>
      <div className='text-gray-200'>
          <img src={QRcode} alt="Qr code" className='w-40 m-2 mx-auto'/>
          <div className='w-full flex justify-center flex-col items-center font-semibold mx-auto'>
            <h3>Deposit Bank Details</h3>
            <p>Bank Name:  <span className='text-red-600'>ABC Bank</span></p>
            <p>IFSC Number:  <span className='text-red-600'>ABC112233</span></p>
            <p>Account Number:  <span className='text-red-600'>111 222 333 444</span></p>

          </div>
          <div className='flex flex-col'>
            {/* <h3>Deposot Details</h3> */}
            <div className="w-1/2 mx-auto">
            <p className='text-white font-medium'>Enter deposited amount</p>
              <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Deposite amount' className="w-full bg-transparent text-white p-2 outline-none border-2 border-red-600 my-1 rounded-sm"/>
           </div>
            <div className="w-1/2 mx-auto">
            <p className='text-white font-medium'>Enter transation Id</p>
              <input type="text" value={transactionId} onChange={(e)=>setTransactionId(e.target.value)} placeholder='Transation ID' className="w-full bg-transparent text-white p-2 outline-none border-2 border-red-600 my-1 rounded-sm"/>
           </div>
           <button className='w-1/2 mx-auto bg-red-700 my-3 p-2 rounded-md' onClick={()=>setShowConfirmation(true)}>Submit</button>
          </div>
      </div>
    </div>
   {
    showConfirmation && ( <div className=' absolute text-white p-4 bg-[rgba(0,0,0,0.8)] rounded-md'>
      <p className='bg-red-700 p-6 rounded-md text-lg font-medium'>Are you sure you want to deposite INR 100 in your account?</p>
      <div className='flex justify-between my-4'>
        <button className="bg-red-600 p-2 px-4 rounded-md text-white hover:bg-red-500" onClick={handleSubmit}>Yes</button>
        <button className='bg-red-600 p-2 px-4 rounded-md text-white hover:bg-red-500' onClick={()=>setShowConfirmation(false)}>Cancel</button>
      </div>
    </div>)
   }
   {
    success && (
      <div className='absolute text-white p-4 bg-[rgba(0,0,0,0.9)] rounded-md'>
        <SuccessfulDeposit />
      </div>
    )
   }
  </div>
  )
}
