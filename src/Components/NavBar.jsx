import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import {RiTelegramLine } from "react-icons/ri";
import {AiOutlineClose,AiOutlineMenu,AiFillLinkedin,AiFillGithub,AiOutlineMail,AiFillTwitterSquare,} from 'react-icons/ai'
const NavBar = () => {
    const [nav,setNav]=useState(false);
    const [shadow,setShadow]=useState(false);
    // const [navBG,setNavBG]=useState('#ecf0f3')
    // const [linkColor,SetlinkColor]=useState('#1f2937')

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 90){
                setShadow(true);
            }
            else{
                setShadow(false);
            }
        })
    });
    const hadlClickNav=()=>{
        setNav(!nav);
    }
  return (
    <div style={{backgroundColor:'#ecf0f3'}} className={shadow ?'fixed w-full shadow-xl z-[100]':'fixed w-full z-[100]'}>
        <div className='flex h-20 justify-between items-center w-full px-2 2xl:px-16'>
            <img src={logo} alt="/" width={125} height={50} />
           <div>
                <ul className='hidden md:flex '>
                    <li className=' ml-10 text-sm uppercase hover:border-b'><a href="#home">Home</a></li>
                    <li className='ml-10 text-sm uppercase hover:border-b'><a href="#about">About</a></li>
                    <li className='ml-10 text-sm uppercase hover:border-b'><a href="#skills">Skills</a></li>
                    <li className='ml-10 text-sm uppercase hover:border-b'><a href="#contact">Contact</a></li>
                </ul>
                <div onClick={hadlClickNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
           </div>
        </div>
        <div className={nav ?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':'' }>
            <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':'fixed left-[-100%]'}>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src={logo} alt="/" width={83} height={35} />
                        <div onClick={hadlClickNav} className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='py-2 w-[85%] md:[90%] py'>Welcome What project you need me to builed</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <ul className='uppercase '>
                        <li className='py-4 text-sm'><a href="#home">Home</a></li>
                        <li className='py-4 text-sm'><a href="#about">About</a></li>
                        <li className='py-4 text-sm'><a href="#skills">Skills</a></li>
                        <li className='py-4 text-sm'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className='pt-20 uppercase'>
                    <p className='text-blue-600 font-bold'>contact me on</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a  href="https://www.facebook.com/wiz.sifasol.7/" target="_blank"><AiFillLinkedin/></a>
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/> 
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://github.com/sifamelon"target="_blank"><AiFillGithub/></a>
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://t.me/Ynwa321" target="_blank"><RiTelegramLine/></a>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default NavBar