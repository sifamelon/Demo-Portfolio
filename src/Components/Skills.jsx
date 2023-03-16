import React from 'react'
import h from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/javascript.png'
import node from '../assets/skills/node.png'
import re from '../assets/skills/react.png'
import git from '../assets/skills/github1.png'
import tail from '../assets/skills/tailwind.png'
import mongo from '../assets/skills/mongo.png'
import next from '../assets/skills/nextjs.png'
import fire from '../assets/skills/firebase.png'
import aws from '../assets/skills/aws.png'
const Skills = () => {
  return (

    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-2'>Experience Technology</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img src={h} alt="" width={84} height={34} />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div> 
            </div>
        </div>     

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={css} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>css</h3>
                </div> 
            </div>
        </div>  

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={js} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                </div> 
            </div>
        </div>  

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={node} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Node.js</h3>
                </div> 
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={re} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>React.js</h3>
                </div> 
            </div>
        </div>  

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={next} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Next.js</h3>
                </div> 
            </div>
        </div>  

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={git} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>GitHub</h3>
                </div> 
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={mongo} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>MongoDB</h3>
                </div> 
            </div>
        </div> 

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={tail} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>TailWindCss</h3>
                </div> 
            </div>
        </div>      
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={aws} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Amazon</h3>
                </div> 
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
               <div className='m-auto'>
                 <img width={84} height={34} src={fire} alt="" />
              </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>FireBase</h3>
                </div> 
            </div>
        </div>     
      </div>
    </div>
  )
}

export default Skills