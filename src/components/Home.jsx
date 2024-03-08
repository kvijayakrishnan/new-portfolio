import React,{useState, useEffect} from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
 
    

    


  return (
    <div 
        name='home' 
        className='h-screen w-full bg-gradient-to-b from-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h6 className="text-xl sm:text-xl font-bold text-white max-md:mt-40 font-thin">
                    Hi..
                </h6>
                <h2 className='text-3xl sm:text-5xl font-bold text-white mt-2'> <span className='font-thin'> I'm</span>  Vijayakrishnan</h2>
                <h2 className='text-3xl sm:text-2xl font-bold text-white mt-1 font-thin'>MERN Stack Web Developer.</h2>
                <h5 className='text-white font-light text-2xl py-4  font-thin'> I'm passionate Full-stack developer as a beginner to intermidiate level.
                    Currently, I'm focused on building responsive full-stack web
                    applications.
                </h5>
                {/* <div>{text}</div> */}
                <div>
                    <Link 
                        to='portfolio'
                        smooth
                        duration={500}
                        className='group font-light text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-600  cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={28} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            {/* <div>
                <img src={HeroImage} 
                    alt="my profile" 
                    className='rounded-2xl w-64 mx-auto w-80 max-md:w-52 max-w-[700px]' />
            </div> */}
        </div>
    </div>
  )
  }
// 50 => social icons

export default Home
