import React, { useState } from 'react'
import logo from './../../assets/images/home/aviator.png'
import profile from './../../assets/images/home/profile.png'
import share from './../../assets/images/home/share.png'
import coin from './../../assets/images/home/coin.png'
import setting from './../../assets/images/home/settings.png'
import exit from './../../assets/images/home/exit-game.png'
import txn from './../../assets/images/home/transcation-history.png'
import leader from './../../assets/images/home/leaderbords-icon.png'
import game from './../../assets/images/home/game-history.png'
import reward from './../../assets/images/home/daily-rewards.png'
import wallet from './../../assets/images/home/wallet.png'
import money from './../../assets/images/home/add-money.png'
import { FaShareNodes } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function Footer({ hideFooter, setActiveModal }) {
  const navigate = useNavigate();
  const openModal = (modalType) => {
    setActiveModal(modalType);
    hideFooter(true); // Hide footer when modal opens
  };

  return (
    <div className='bg-[rgba(0,0,0,0.6)] h-20 flex items-center md:justify-between md:gap-60'>
        
        <div className='flex w-1/2 md:w-1/3 justify-around items-center'>
            <span className='flex flex-col justify-center items-center text-white cursor-pointer' onClick={() => openModal('txn')}>
            <img src={txn} alt="coin" className='w-6 md:w-11'/>
            <p className='font-semibold text-xs md:text-md'>Txn History</p>
            </span>
            <span className='flex flex-col justify-center items-center text-white cursor-pointer' onClick={() => openModal('leaderBoard')}>
            <img src={leader} alt="coin" className='w-6 md:w-11'/>
            <p className='font-semibold text-xs md:text-md'>Leaderboards</p>
            </span>
            <span className='flex flex-col justify-center items-center text-white cursor-pointer' onClick={() => openModal('gameHistory')}>
            <img src={game} alt="settings" className='w-6 md:w-11'/>
            <p className='font-semibold text-xs md:text-md'>Game History</p>
            </span>
        </div>
        <button className='bg-[url("./assets/images/home/play-button.png")] bg-contain bg-no-repeat w-1/6 md:w-1/5 h-20 -mt-8 md:-mt-20' onClick={()=>navigate('/aviator')}></button>
        <div className='flex w-1/2 md:w-1/3 justify-around items-center'>
            <span className='flex flex-col justify-center items-center text-white cursor-pointer' onClick={() => openModal('reward')}>
            <img src={reward} alt="coin" className='w-6 md:w-11'/>
            <p className='font-semibold text-xs md:text-md'>Daily Rewards</p>
            </span>
            <span className='flex flex-col justify-center items-center text-white cursor-pointer'  onClick={() => openModal('wallet')}>
            <img src={wallet} alt="coin" className='w-6 md:w-11'/>
            <p className='font-semibold text-xs md:text-md'>Wallet</p>
            </span>
            <span className='flex flex-col justify-center items-center text-white cursor-pointer' onClick={() => openModal('addmoney')}>
            <img src={money} alt="settings" className='w-6 md:w-11'/>
            <p className='font-semibold text-xs md:text-md'>Add Money</p>
            </span>
        </div>
    </div>
  )
}
