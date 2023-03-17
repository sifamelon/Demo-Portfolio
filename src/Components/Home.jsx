import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {RiTelegramLine } from "react-icons/ri";
const Home = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1246px] flex justify-center items-center w-full h-full mx-auto'>
            <div>
                <p className='text-gray-700 uppercase text-sm p-2 tracking-widest '>Let me builed your dream project </p> 
                <h1 className='text-gray-700'>Hi I'm <span className='text-blue-700'>SIFEN</span></h1> 
                <h1 className='py-4 text-gray-700'>A Full-Stack Web Developer </h1>
                <p className='py-4 max-w-[70%] m-auto'>I’m focused on building responsive web applications
                   integrating back-end technologies.I Have Also Experience On Cross-Platform Mobile Application </p>
                   <div className='flex py-4 items-center justify-between m-auto max-w-[330px]'>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                            <AiFillLinkedin/>
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                        <a  href="https://www.facebook.com/wiz.sifasol.7/" target="_blank"><AiFillLinkedin/></a> 
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                            <a href="https://github.com/sifamelon" target="_blank"><AiFillGithub/></a> 
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                            <a href="https://t.me/Ynwa321" target="_blank"><RiTelegramLine/></a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home