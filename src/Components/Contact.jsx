import React from 'react'
import comp from '../assets/images/comp.jpg'
import {AiFillLinkedin,AiFillGithub,AiFillFacebook, AiFillFileText,} from 'react-icons/ai'
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
            <p className='text-xl tracking-widest text-blue-600 '></p>
            <h2 className='py-4'> Get In Toch</h2>
            <div className='grid grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl py-4 '>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-100' src={comp} alt="" />
                        </div>
                        <div>
                            <h2 className='py-2 '>Sifen Solomon</h2>
                            <p>Full-Stack Web And Mobile App Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and lets talk.</p>
                            <div>
                                <p className='uppercase pt-8'>You Can Contact Me On </p>
                                <div className='flex justify-around py-4'>
                                    
                                    <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                                        <AiFillFacebook/> 
                                    </div>
                                    <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                                        <AiFillGithub/> 
                                    </div>
                                    <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                                        <AiFillFileText/> 
                                    </div>
                                    <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-150 ease-in duration-300'>
                                        <AiFillLinkedin/> 
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {right} */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action="post">
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label htmlFor="">Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required />
                                </div>
                                <div className='flex flex-col '>
                                    <label htmlFor="">Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="tel" pattern='[0-9]' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                    <label htmlFor="">Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" required />
                                </div>
                                <div className='flex flex-col py-2 '>
                                    <label htmlFor="">Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2' htmlFor="">Message</label>
                                    <textarea  rows="10" className='border-2 rounded-lg p-3  border-gray-300'></textarea>
                                    <button className='p-4 text-gray-100 mt-4 bg-blue-600 hover:bg-gray-600'>Send</button>
                                </div>
                                
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact