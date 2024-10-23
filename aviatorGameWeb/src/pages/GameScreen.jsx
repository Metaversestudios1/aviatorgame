import React from 'react'
import Header from '../components/home/Header'
import Planefly from '../components/Game/Planefly';

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
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      bet: 5000,
      mult: '1.8X',
      cashout: '',
    },
    {
      id: 46109,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      bet: 10000,
      mult: '2.1X',
      cashout: 10500,
    },
    {
      id: 46110,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      bet: 8500,
      mult: '3.5X',
      cashout: '',
    },
    {
      id: 46111,
      img: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      bet: 4300,
      mult: '1.5X',
      cashout: 6450,
    }
  ]
  
  return (
    <div className="bg-black w-screen">
      <Header />
      <div className="flex justify-between flex-col md:flex-row nd:flex-row gap-3 px-2">
        <div className="md:w-[25vw]">
          <div className="w-full flex justify-center my-2">
            <span className="border rounded-full border-gray-700">
              <span className="border border-gray-700 rounded-full text-white text-xs p-1 px-2 bg-gray-900">
                All Bets
              </span>
              <span className=" border-gray-700 rounded-full text-white text-xs p-1 px-2">
                My Bets
              </span>
            </span>
          </div>
          <div className="border h-screen rounded-2xl border-gray-700 bg-gray-900 p-2 px-3">
            <p className="text-white uppercase">
              Total bets: <span className="text-green-700">441</span>
            </p>
            <table className="w-full text-gray-400 my-2 table-fixed">
              <thead>
                <tr className="flex justify-around">
                  <th className="font-thin">User</th>
                  <th className="font-thin">Bet</th>
                  <th className="font-thin">Mult.</th>
                  <th className="font-thin">Cash out</th>
                </tr>
              </thead>
              <tbody>
                {betUser.length > 0 &&
                  betUser.map((user, index) => (
                    <tr
                      key={index}
                      className=" text-white flex justify-around px-3 items-center bg-black p-1 my-1 rounded-full"
                    >
                      <td className="flex items-center gap-2 w-1/4">
                        <img
                          src={user.img}
                          alt=".."
                          className="w-8 h-8 rounded-full"
                        />
                        <p className="text-sm">{user.id}</p>
                      </td>
                      <td className="text-xs w-1/4 text-center">
                        <span className="w-max border rounded-full p-1">
                          {user.bet}₹
                        </span>
                      </td>
                      <td className="text-sm w-1/4 text-center">
                        {user.mult || "-"}
                      </td>
                      <td className="text-sm w-1/4 text-center">
                        {user.cashout || "-"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className='w-4/6'> */}
          <Planefly />
        {/* </div> */}
      </div>
    </div>
  );
}
