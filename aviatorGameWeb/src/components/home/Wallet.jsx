import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Gold from './../../assets/images/wallet/gold.png'
import { FaPiggyBank } from 'react-icons/fa6'
import { GrAtm } from 'react-icons/gr'
import Deposite from './Deposite'

export default function Wallet({onClose,hideFooter, setActiveModal }) {
    const [openDeposite, setOpenDeposite] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    hideFooter(true); // Hide footer when modal opens
  };

  // const handleDepositeClick = () => {
  //   setOpenDeposite(true);
  //   setOpenWithdraw(false); // Close withdraw tab when opening deposit
  // };

  const handleWithdrawClick = () => {
    setOpenWithdraw(true);
    setOpenDeposite(false); // Close deposit tab when opening withdraw
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75 z-50">
    <div className="bg-[rgba(0,0,0,0.6)] mt-20 w-[50%] rounded-2xl overflow-hidden">
      <div className='bg-[rgba(0,0,0,0.7)] relative p-4 flex flex-col justify-center'>
          <h2 className="text-xl text-red-600 font-bold mx-auto mb-4">Wallet</h2>
          <RxCross2 className='text-white text-3xl cursor-pointer absolute top-3 right-2' onClick={onClose} />
      </div>
      <div>
          

      <div class="relative overflow-x-auto p-4">
                <div className='w-full flex justify-between p-6' style={{
          background: 'radial-gradient(circle, rgba(248,94,94,0.53) 50%, rgba(0,0,0,0.6) 100%)'
      }}>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <p className='text-lg font-medium text-white'>Available Balance</p>
                <h2 className='text-2xl font-bold text-white'>INR 500</h2>
            </div>
            <img src={Gold} alt="coin" className='w-20' />
          </div>
          <div className='w-1/2 flex mx-auto justify-between my-4 gap-4'>
            <button className='bg-blue-500 text-blue-100 flex items-center gap-2 font-medium p-2 justify-center text-lg w-full hover:bg-blue-200 hover:text-blue-600' onClick={() => openModal('addmoney')}>Deposite <FaPiggyBank /></button>
            <button className='bg-blue-500 text-blue-100 flex items-center gap-2 font-medium p-2 justify-center text-lg w-full hover:bg-blue-200 hover:text-blue-600' onClick={handleWithdrawClick}>Withdraw <GrAtm /></button>
          </div>

            {/* Withdraw Tab */}
            {openWithdraw && (
              <div className="text-white p-4 w-1/2 mx-auto">
                <h3 className="text-sm font-medium mb-2 text-blue-400">Enter amount you want to withdrawn</h3>
                <input type="number" placeholder='Enter withdraw amount' className='border-2 border-red-600 bg-transparent p-2 w-full text-white rounded-sm'/>
                <button className='bg-red-600 p-2 w-full mt-4 hover:bg-red-500 rounded-sm'>Submit Request</button>
              </div>
            )}
      </div>

      </div>
    </div>
  </div>
  )
}
