import React,{useState, useEffect} from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
    const [word, setWord] =useState('Frontend')
    
    useEffect(() =>{
        const words = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer']
        let index= 0

        const interval = setInterval(() =>{
            setWord(words[index]);
            index = (index + 1) % words.length;
        },1500);

        return () => clearInterval(interval)

    },[])
    


  return (
    <div 
        name='home' 
        className='h-screen w-full bg-gradient-to-b from-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className="text-xl sm:text-xl font-bold text-white max-md:mt-40 font-thin">
                    Hi there 👋
                </h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-white mt-2'> <span className='font-thin text-4xl'> My name is</span>  Vijayakrishnan K</h2>
                <h2 className='text-3xl sm:text-2xl  text-white mt-1 font-thin'>{word}</h2>
                {/* <h5 className='text-white font-light text-2xl py-4  font-thin'> Passionate full-stack developer.
                currently focused on building responsive full-stack web applications 
                </h5> */}
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
