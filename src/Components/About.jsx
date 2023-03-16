import React from 'react'
import pic from '../assets/profile2.png'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex py-16 items-center p-2'>
        <div className='m-auto max-w-[1240px] md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h2 className='py-4 text-xl tracking-widest text-blue-600'>About Me</h2>
                <p className='text-gray-600'>My name is Sifen, and I'm your go-to full stack developer and mobile application developer. I specialize in building intuitive and feature-rich websites, applications, and products that are tailored to the needs of my clients.
                   I have a deep understanding of technologies like JavaScript, CSS/HTML5, ReactJS, AngularJS, PHP/MySQL, NodeJS, and Apache Cordova. My expertise lies in developing highly functional front end systems with user-friendly interfaces. I keep myself abreast with the latest developments in web development tools and techniques to ensure my projects stay up to date.
                   I employ agile principles when working on a project - from its ideation to deployment on the production server. If a stable platform is needed for subsequent activities such as testing or maintenance, I take care of that too. Furthermore, I also understand how critical it is for any business to maintain branding so design integration for consistent look & feel meets no sweat for me.
                </p>
                <p>Moreover, my experience includes modernizing legacy code without disrupting current services; creating scalable applications that can accommodate sudden spikes or drops in user base; debugging existing software solutions with minimum use of hardware resources; testing load time performance; implementing smooth animation patterns; generating effective error messages; deploying web apps on cloud platforms (e.g. Heroku); increasing responsiveness by optimizing algorithms executed by the client's end device (web or mobile).
                   My portfolio speaks for itself! As long as you need intelligent new builds or optimize your existing product solutions - count me in! 
                </p>            
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300on'>
                <img className='rounded-xl' src={pic} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About