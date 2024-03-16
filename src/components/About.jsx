import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../assets/my-cv.pdf'

function About() {
  const social =[
    {
      id:1,
      child:(
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href:"https://www.linkedin.com/in/vijay-krishnan-1a99aa228/",
      style:'rounded-tr-md',
    },
    {
      id:2,
      child:(
        <>
          <FaGithub size={30} />
        </>
      ),
      href:"https://github.com/kvijayakrishnan",
    },
    {
      id:3,
      child:(
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:"https://drive.google.com/file/d/1dZbt1jN8xk3ff6X6Y9oj29fnSb7QawG8/view?usp=sharing",
      style:'rounded-br-md',
      download:true,
    },
    
  ]

  return (
    <div
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-900 to-black'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-white font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl font-thin text-white mt-6'>

                A Self-Taught Web Developer in designing new features from ideation to production, 
                implementation of design flows into high-performance web applications. 
                Taking into consideration the user experience while writing reusable and efficient code. 
                Passionately combining good design, technology, and innovation in all projects, 
                accompanying from the first idea to release. Currently focused on full-stack development.

            </p>
            <ul >
              <li className='flex flex-row  justify-start  text-white px-2 gap-8 py-8'>
                {social.map(({id,child,href,style, download}) =>(
                  <li 
                    className='hover:scale-150 duration-500' 
                  key={id}
                    
                  >
                    <a
                      href={href}
                      className=''
                      download={download}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {child}
                    </a>
                  </li>
                ))}
              </li>
            </ul>
        </div>
        <div>
            
          </div>

    </div>
  )
}

export default About