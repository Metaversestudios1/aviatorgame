import React from 'react';
import { GiBackwardTime } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const ProfileModel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75 z-50">
      <div className="bg-[rgba(0,0,0,0.7)] w-full sm:w-[90%] md:w-[70%] lg:w-[50%] rounded-2xl overflow-hidden mx-4">
        <div className="bg-[rgba(0,0,0,0.0)] relative p-4 flex flex-col justify-center">
          <RxCross2
            className="text-white text-2xl sm:text-3xl cursor-pointer absolute top-3 right-2"
            onClick={onClose}
          />
        </div>
        <div className='p-6 flex flex-wrap flex-col md:flex-row justify-between'>
            <div className='w-full md:w-[45%]'>
                <div className='flex items-center gap-2 text-white justify-around my-3'>
                  <img
                      src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-character-man-businessman-business-suit-looking-camera-isolated-transparent-png-background-277029050.jpg"
                      alt="..."
                      className="w-20 md:w-20 rounded-full"
                  />
                  <p className='text-xl'>User : *****56445</p>
                </div>
                <div className='bg-[rgba(0,0,0,0.8)] text-white overflow-hidden rounded-lg'>
                    <p className='text-white font-medium text-center py-2' style={{
                            background: 'radial-gradient(circle, rgba(249, 25, 25, 0.53) 50%, rgba(0,0,0,0.5) 100%)'
                        }}>Your Summary</p>
                    <div className='w-full flex flex-col items-center py-5 border-b border-red-500'>
                        <p className='text-ms font-semibold'>Your first game was on</p>
                        <p className='text-red-500 font-semibold'>11 August 2024</p>
                    </div>
                    <div className='w-full flex flex-col items-center py-5 border-b border-red-500'>
                        <p className='text-ms font-semibold'>Your have played</p>
                        <p className='font-semibold'>On Average, 14 Sept - 14 Oct</p>
                    </div>
                    <div className='w-full flex items-center py-5 px-4 text-md justify-between'>
                        <span className='text-center'>
                            <p>Matches</p>
                            <span className='text-red-500 font-semibold'>20</span>
                        </span>
                        <span className='text-center'>
                            <p>Wins</p>
                            <span className='text-red-500 font-semibold'>12</span>
                        </span>
                        <span className='text-center'>
                            <p>Loses</p>
                            <span className='text-red-500 font-semibold'>8</span>
                        </span>
                        <span className='text-center'>
                            <p>Winrate</p>
                            <span className='text-red-500 font-semibold'>60%</span>
                        </span>
                        <span className='text-center'>
                            <p>Kda</p>
                            <span className='text-red-500 font-semibold'>4.3</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[45%] rounded-lg overflow-hidden'>
              <div className="bg-[rgba(0,0,0,0.8)] text-white rounded-lg">
                <div className="flex justify-between items-cente p-2" style={{
                            background: 'radial-gradient(circle, rgba(249, 25, 25, 0.53) 50%, rgba(0,0,0,0.5) 100%)'
                        }}>
                    <GiBackwardTime  className='text-xl font-medium'/>
                  <h3 className="text-white text-lg">Game History</h3>
                  <p className="bg-black text-white px-1 py-1 rounded-full text-xs">This Week</p>
                </div>
                <div className="overflow-y-auto max-h">
                  <table className="w-full text-center text-sm mt-3">
                    <thead>
                      <tr className="border-b border-red-500 text-red-500">
                        <th className="py-2">Bet</th>
                        <th>Multiplier</th>
                        <th>Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-md font-medium">
                        <td className="py-5">200 INR</td>
                        <td>2X</td>
                        <td>400 INR</td>
                      </tr>
                      <tr className="text-md font-medium">
                        <td className="py-5">100 INR</td>
                        <td>2X</td>
                        <td>200 INR</td>
                      </tr>
                      <tr className="text-md font-medium">
                        <td className="py-5">1000 INR</td>
                        <td>10X</td>
                        <td>10,000 INR</td>
                      </tr>
                      <tr className="text-md font-medium">
                        <td className="py-5">500 INR</td>
                        <td>5X</td>
                        <td>2,500 INR</td>
                      </tr>
                      <tr className="text-md font-medium">
                        <td className="py-5">100 INR</td>
                        <td>10X</td>
                        <td>1000 INR</td>
                      </tr>
                      <tr>
                        <td className="py-2">80 INR</td>
                        <td>1.5X</td>
                        <td>120 INR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
