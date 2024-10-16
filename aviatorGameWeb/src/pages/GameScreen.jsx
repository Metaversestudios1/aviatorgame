import React from 'react'
import Header from '../components/home/Header'

export default function GameScreen() {

  const betUser = [
    {
      id: 46107,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      bet: 7297,
      mult: '2.3X',
      cashout: 8425,
    },
    {
      id: 46108,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/002/271/601/small_2x/woman-portrait-close-up-face-photo-smiling-girl-picture-id917073456.jpg',
      bet: 5000,
      mult: '1.8X',
      cashout: 6700,
    },
    {
      id: 46109,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/421/small_2x/portrait-of-smiling-young-woman-with-brown-hair-and-hands-in-pockets-photo.jpg',
      bet: 10000,
      mult: '2.1X',
      cashout: 10500,
    },
    {
      id: 46110,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/417/small_2x/close-up-portrait-of-a-handsome-mature-man-with-gray-hair-and-beard-photo.jpg',
      bet: 8500,
      mult: '3.5X',
      cashout: 12000,
    },
    {
      id: 46111,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/002/259/143/small_2x/portrait-of-a-cheerful-young-guy-in-summer-clothes.jpg',
      bet: 4300,
      mult: '1.5X',
      cashout: 6450,
    }
  ]
  
  return (
    <div className='bg-black h-screen w-screen'>
    <Header />
    <div className='flex justify-between flex-col nd:flex-row gap-2'>
      <div className='md:w-2/6'>
        <div className='w-full flex justify-center my-2'>
          <span className='border rounded-full border-gray-700'><span className='border border-gray-700 rounded-full text-white text-xs p-1 px-2 bg-gray-900'>All Bets</span><span className=' border-gray-700 rounded-full text-white text-xs p-1 px-2'>My Bets</span></span>
        </div>
        <div className='border h-screen rounded-2xl border-gray-700 bg-gray-900 p-2 px-3'>
            <p className='text-white uppercase'>Total bets: <span className='text-green-700'>441</span></p>
            <table className='w-full text-gray-400 my-2'>
              <thead className='flex justify-between'>
                <td className=' font-thin'>User</td>
                <td className=' font-thin'>Bet</td>
                <td className=' font-thin'>Mult.</td>
                <td className=' font-thin'>Cash out</td>
              </thead>
              <tbody>
                {
                  betUser.length > 0 && betUser.map((user,index)=>(
                    <tr className='bg-black p-1 rounded-full'>
                      <td className='flex items-center gap-2'>
                        <img src={user.img} alt=".." className='w-8 h-8 rounded-full'/>
                        <p>{user?.id}</p>
                      </td>
                      <td className='border w-max rounded-full'>{user?.bet}</td>
                      <td>{user.mult}</td>
                      <td>{user.cashout}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
    </div>
  )
}
