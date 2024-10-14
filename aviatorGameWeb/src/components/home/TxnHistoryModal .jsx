import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import './../../assets/styles/trxScreen.css'

export default function TxnHistoryModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75 z-50">
      <div className="bg-[rgba(0,0,0,0.6)] mt-20 w-[50%] rounded-2xl overflow-hidden">
        <div className='bg-[rgba(0,0,0,0.7)] relative p-4 flex flex-col justify-center'>
            <h2 className="text-xl text-red-600 font-bold mx-auto mb-4">Transaction History</h2>
            <RxCross2 className='text-white text-3xl cursor-pointer absolute top-3 right-2' onClick={onClose} />
            <ul className='w-3/5 flex justify-around text-gray-100 gap-4 mx-auto'>
                <li className='text-xl font-medium'>Recent</li>
                <li className='text-xl font-medium'>Highest</li>
                <li className='text-xl font-medium'>Lowest</li>
                <li className='text-xl font-medium'>Loss</li>
            </ul>
        </div>
        <div>
            

<div class="relative overflow-x-auto p-4">
<div className="max-h-[50vh] overflow-y-auto hide-scrollbar">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white bg-transparent dark:bg-gray-700 dark:text-gray-400 pb-4">
            <tr className='mb-4'>
                <th scope="col" class=" rounded-full text-center bg-blue-600 mx-3 my-4">
                    Month
                </th>
                <th scope="col" class=" rounded-full text-center bg-blue-600 mx-3 my-4">
                    Payment INR
                </th>
                <th scope="col" class=" rounded-full text-center bg-blue-600 mx-3 my-4">
                    Withdrawn
                </th>
                <th scope="col" class=" rounded-full text-center bg-blue-600 mx-3 my-4">
                    Received INR
                </th>
                <th scope="col" class=" rounded-full text-center bg-blue-600 mx-3 my-4">
                    Status
                </th>
            </tr>
        </thead>
        {/* space */}
        <tbody>
        <tr>
        <td colSpan={5} className="h-4"></td> {/* Spacer row dont remove */}
        </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    700
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    0
                </td>
                <td class="px-6 py-4 text-red-600 font-medium text-lg text-center">
                    failure
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            <tr class="bg-transparent dark:bg-gray-800 dark:border-gray-700 border-2 border-red-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                    02/09/2020
                </th>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    200
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    -
                </td>
                <td class="px-6 py-4 text-gray-200 font-medium text-lg text-center">
                    10000
                </td>
                <td class="px-6 py-4 text-green-400 font-medium text-lg text-center">
                    Successful
                </td>
            </tr>
            
        </tbody>
        
    </table>
        </div>
            <p className='text-lg text-white my-3'>Total Transaction 500</p>
</div>

        </div>
      </div>
    </div>
  );
}
