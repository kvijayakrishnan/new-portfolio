import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../assets/my-cv.pdf'

const Contact = () => {
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
          <HiOutlineMail size={30} />
        </>
      ),
      href:"mailto:vijayakrishnankbv@yahoo.in",
    },
    {
      id:4,
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
      name="contact"
      className='w-full h-full bg-gradient-to-b  from-black to-gray-900 text-white p-4'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6 font-thin text-xl'>Feel free to send me a message by filling out the form below. I'd love to hear from you!</p>
          </div>

          <div className='flex justify-center items-center'>
            <form 
              action="https://public.herotofu.com/v1/fcb72520-6254-11ee-9198-bfee6681f065"
              // form submission using herotofu.com
              method='POST'
              className='flex flex-col w-full md:w-1/2'
              >
              <input 
                type='text'
                name='name'
                placeholder='Enter Your name'
                className=' text-sm font-light p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />
              <input 
                type='text'
                name='email'
                placeholder='Enter Your Email'
                className='text-sm font-light my-4 p-2 bg-transparent border-2 rounded-md text-white focus-:outline-none'
              />
              <textarea 
                name='message'
                placeholder='Enter Your message'
                rows="8"
                className='text-sm font-light p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />
              <button className='font-light text-xl text-white px-6 py-3 my-2  rounded-md bg-red-600  cursor-pointer hover:scale-110 duration-500'>Let's Connect</button>
            </form>
          </div>
          
          <div>
            <ul >
              <li className='flex flex-row  justify-center gap-8 py-1'>
                {social.map(({id,child,href,style, download}) =>(
                  <li 
                    className='hover:scale-150 duration-500 py-3' 
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
        </div>
    </div>
  )
}

export default Contact