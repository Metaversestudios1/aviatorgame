import React, { useState } from 'react'
import logo from './../../assets/images/home/aviator.png'
import profile from './../../assets/images/home/profile.png'
import share from './../../assets/images/home/share.png'
import coin from './../../assets/images/home/coin.png'
import setting from './../../assets/images/home/settings.png'
import exit from './../../assets/images/home/exit-game.png'
import sound from './../../assets/images/home/sound.png'
import music from './../../assets/images/home/music.png'
import quick from './../../assets/images/home/quick-share-seeklogo.png'
import whatsapp from './../../assets/images/home/WhatsApp_icon.png'
import facebook from './../../assets/images/home/facebook-logo-2428.png'
import insta from './../../assets/images/home/—Pngtree—instagram icon_8704817.png'

import { FaShareNodes } from 'react-icons/fa6'
export default function Header() {
    const [toggle, setToggle] = useState({
        sound: false,
        share: false,
    });

    const handleToggle = (type) => {
        setToggle(prevState => ({
            ...prevState,
            [type]: !prevState[type]
        }));
    };

  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-20 flex items-center md:justify-between">
      <div className="flex w-1/2 md:w-1/3 justify-around items-center">
        <img src={logo} alt="logo" className="w-[13vw] h-8" />
        <span className="flex">
          <img
            src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-character-man-businessman-business-suit-looking-camera-isolated-transparent-png-background-277029050.jpg"
            alt="..."
            className="w-10 md:w-16"
          />
          <p className="bg-red-600 text-center px-2 flex items-center text-white text-xs md:text-md">
            *****85426
          </p>
        </span>
        <span
          className="flex flex-col justify-center items-center text-white cursor-pointer relative"
          
        >
          <FaShareNodes className="text-xl md:text-4xl" onClick={() => handleToggle("share")}/>
          <p>Share</p>
          {toggle.share && (
            <div className="absolute top-20 bg-[rgba(0,0,0,0.6)] rounded-lg w-max p-2">
              <div className="flex gap-3 mb-2">
                <p className="text-white">www.examplegame.com</p>
                <button
                  data-copy-to-clipboard-target="npm-install-copy-text"
                  className=" text-white dark:text-gray-400 hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-transparent border-gray-200 border"
                >
                  <span
                    id="default-message"
                    className="inline-flex items-center"
                  >
                    <span className="text-xs font-semibold">Copy</span>
                  </span>
                  <span
                    id="success-message"
                    className="hidden inline-flex items-center"
                  >
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
                      Copied
                    </span>
                  </span>
                </button>
              </div>
              <div className="flex justify-between border-t py-4">
                <img src={quick} alt="share" className="w-8" />
                <img src={whatsapp} alt="share" className="w-8" />
                <img src={facebook} alt="share" className="w-8" />
                <img src={insta} alt="share" className="w-8" />
              </div>
            </div>
          )}
        </span>
      </div>
      <div className="flex w-1/2 md:w-1/3 justify-around items-center">
        <span className="flex flex-col justify-center items-center text-white cursor-pointer">
          <img src={coin} alt="coin" className="w-6 md:w-11" />
          <p className="font-semibold">500</p>
        </span>
        <span className="flex flex-col justify-center items-center text-white cursor-pointer relative">
          <img
            src={setting}
            alt="coin"
            className="w-6 md:w-11"
            onClick={() => handleToggle("sound")}
          />
          <p className="font-semibold">Settings</p>
          {toggle.sound && (
            <div className="absolute -bottom-24 bg-[rgba(0,0,0,0.6)] rounded-lg w-max p-2">
              <div className="flex gap-3 mb-2">
                <img src={sound} alt="sound" className="w-8" />
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultValue
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 border-2 bg-transparent outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
              </div>
              <div className="flex gap-3">
                <img src={music} alt="sound" className="w-8" />
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultValue
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 border-2 bg-transparent outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
              </div>
            </div>
          )}
        </span>
        <span className="flex flex-col justify-center items-center text-white cursor-pointer">
          <img src={exit} alt="settings" className="w-6 md:w-11" />
          <p className="font-semibold">Settings</p>
        </span>
      </div>
    </div>
  );
}
