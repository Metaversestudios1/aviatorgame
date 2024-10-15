import React from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function GameHistoryModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75 z-50">
      <div className="bg-[rgba(0,0,0,0.6)] mt-20 w-[50%] rounded-2xl overflow-hidden">
        <div className='bg-[rgba(0,0,0,0.7)] relative p-4 flex flex-col justify-center'>
            <h2 className="text-xl text-red-600 font-bold mx-auto mb-4">game History</h2>
            <RxCross2 className='text-white text-3xl cursor-pointer absolute top-3 right-2' onClick={onClose} />
        </div>
        <div>
            

<div class="relative overflow-x-auto p-4">
<div className="max-h-[50vh] overflow-y-auto hide-scrollbar">
   <ul className='flex justify-between text-white gap-2'>
    <li className='bg-sky-600 px-2 py-1 rounded-full w-full text-xs text-center font-medium'>Month</li>
    <li className='bg-sky-600 px-2 py-1 rounded-full w-full text-xs text-center font-medium'>Bet INR</li>
    <li className='bg-sky-600 px-2 py-1 rounded-full w-full text-xs text-center font-medium'>Multiplier</li>
    <li className='bg-sky-600 px-2 py-1 rounded-full w-full text-xs text-center font-medium'>Earnings INR</li>
    <li className='bg-sky-600 px-2 py-1 rounded-full w-full text-xs text-center font-medium'>Result</li>
   </ul>
   <ul className='flex justify-between text-white gap-2 border-2 border-red-600 items-center my-2'>
    <li className='px-2 py-1 rounded-full w-full text-xs text-center font-medium'>07/09/2020</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>100</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>2X</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>200</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium text-green-500'>Victory</li>
   </ul>
   <ul className='flex justify-between text-white gap-2 border-2 border-red-600 items-center my-2'>
    <li className='px-2 py-1 rounded-full w-full text-xs text-center font-medium'>07/09/2020</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>500</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>1.5X</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>400</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium text-green-500'>Victory</li>
   </ul>
   <ul className='flex justify-between text-white gap-2 border-2 border-red-600 items-center my-2'>
    <li className='px-2 py-1 rounded-full w-full text-xs text-center font-medium'>07/09/2020</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>100</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>3X</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>200</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium text-green-500'>Victory</li>
   </ul>
   <ul className='flex justify-between text-white gap-2 border-2 border-red-600 items-center my-2'>
    <li className='px-2 py-1 rounded-full w-full text-xs text-center font-medium'>07/09/2020</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>100</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>2X</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>200</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium text-green-500'>Victory</li>
   </ul>
   <ul className='flex justify-between text-white gap-2 border-2 border-red-600 items-center my-2'>
    <li className='px-2 py-1 rounded-full w-full text-xs text-center font-medium'>07/09/2020</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>100</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>5X</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>200</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium text-green-500'>Victory</li>
   </ul>
   <ul className='flex justify-between text-white gap-2 border-2 border-red-600 items-center my-2'>
    <li className='px-2 py-1 rounded-full w-full text-xs text-center font-medium'>07/09/2020</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>100</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>2.6X</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium'>200</li>
    <li className='px-2 py-1 w-full text-md text-center font-medium text-green-500'>Victory</li>
   </ul>
</div>
            <p className='text-lg text-white my-3'>Total Day Played 10</p>
</div>

        </div>
      </div>
    </div>
  )
}
