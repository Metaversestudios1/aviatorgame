import React from 'react'
import BG from './../assets/images/login/bg.png'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <img src={BG} alt="..." className='w-full h-full'/>
      <div className='absolute top-0 left-0 right-0'>
        <Header />
      </div>
      <div className='absolute bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </div>
  )
}
