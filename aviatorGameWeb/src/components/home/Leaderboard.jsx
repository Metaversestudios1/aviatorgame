import React from 'react'
import { FaAward, FaChevronDown } from 'react-icons/fa6'
import { GiTrophyCup } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

export default function Leaderboard({onClose}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75 z-50">
    <div className="bg-[rgba(0,0,0,0.8)] mt-20 w-[50%] rounded-2xl overflow-hidden">
      <div className='bg-[rgba(0,0,0,0.7)] relative p-4 flex flex-col justify-center'>
          <h2 className="text-xl text-red-600 font-bold mx-auto mb-4">Top Earners</h2>
          <RxCross2 className='text-white text-3xl cursor-pointer absolute top-3 right-2' onClick={onClose} />
      </div>
      <div>
          

<div class="relative overflow-x-auto p-4">
<div className="max-h-[50vh] overflow-y-auto hide-scrollbar">
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li>Rank</li>
                <li>User</li>
            </ul>
        </li>
        <li>Rewards</li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-yellow-400'>1</li>
                <li className='flex gap-2 items-center text-yellow-400'>
                    <img src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 6766</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-yellow-400'>2.2</span> <GiTrophyCup className='text-blue-200'/><GiTrophyCup className='text-blue-200'/></li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-blue-300'>2</li>
                <li className='flex gap-2 items-center text-blue-300'>
                    <img src="https://www.shutterstock.com/image-photo/half-body-shot-beauty-asian-260nw-1489792355.jpg" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 4588</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-blue-300'>1.5</span> <FaAward className='text-blue-200'/><GiTrophyCup className='text-blue-200'/></li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-orange-400'>3</li>
                <li className='flex gap-2 items-center text-orange-400'>
                    <img src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 9000</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-orange-400'>1.4</span> <FaAward className='text-blue-200'/><FaAward className='text-blue-200'/></li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-red-400'>4</li>
                <li className='flex gap-2 items-center text-red-400'>
                    <img src="https://www.shutterstock.com/image-photo/portrait-her-she-nice-attractive-260nw-1619251804.jpg" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 5000</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-red-400'>1</span> <FaAward className='text-blue-200'/></li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-red-400'>5</li>
                <li className='flex gap-2 items-center text-red-400'>
                    <img src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 3277</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-red-400'>1</span> <FaAward className='text-blue-200'/></li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-yellow-400'>6</li>
                <li className='flex gap-2 items-center text-yellow-400'>
                    <img src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 6766</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-yellow-400'>2.2</span> <GiTrophyCup className='text-gray-200'/><GiTrophyCup className='text-gray-200'/></li>
    </ul>
    <ul className='flex justify-between border items-center p-2 text-lg text-gray-400 font-medium my-2'>
        <li>
            <ul className='flex gap-10 font-medium'>
                <li className='text-center w-11 text-yellow-400'>7</li>
                <li className='flex gap-2 items-center text-yellow-400'>
                    <img src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=" alt="..." className='w-8 h-8 rounded-full' />
                    <p>ID 6766</p>
                </li>
            </ul>
        </li>
        <li className='flex items-center gap-2 text-xl'><span className='text-yellow-400'>2.2</span> <GiTrophyCup className='text-gray-200'/><GiTrophyCup className='text-gray-200'/></li>
    </ul>
</div>
<div className='flex w-full justify-center'>
<FaChevronDown className='text-3xl text-white text-center' />
</div>
</div>

      </div>
    </div>
  </div>
  )
}
