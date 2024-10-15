import React, { useState } from 'react'
import BG from './../assets/images/login/bg.png'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import TxnHistoryModal from '../components/home/TxnHistoryModal ';
import GameHistoryModal from '../components/home/GameHistoryModal';

export default function Home() {
  const [isFooterHidden, setIsFooterHidden] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleHideFooter = (hide) => {
    setIsFooterHidden(hide);
  };
  const closeModal = () => {
    setActiveModal(null);
    handleHideFooter(false); // Show footer when modal closes
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img src={BG} alt="..." className='w-full h-full'/>
      <div className='absolute top-0 left-0 right-0'>
        <Header />
      </div>
      {/* {!isFooterHidden && ( */}
        <div className={`absolute ${!isFooterHidden ? 'bottom-0':'-bottom-[100%]'} left-0 right-0 transition-all delay-150 ease-linear`}>
          <Footer hideFooter={handleHideFooter} setActiveModal={setActiveModal} />
        </div>
      {/* // )} */}
      {activeModal === 'txn' && <TxnHistoryModal  onClose={closeModal} />}
      {activeModal === 'gameHistory' && <GameHistoryModal onClose={closeModal} />}
    </div>
  )
}
