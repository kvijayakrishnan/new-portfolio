import React from 'react'
import moviesfrontend from '../assets/portfolio/movies-frontend.png'
import passwordreset from '../assets/portfolio/password-reset.png'
import youtube from '../assets/portfolio/Youtube.png'



function Portfolio() {
    const portfolios = [
        {
            id:1,
            src: moviesfrontend,
            demo:'https://heartfelt-florentine-46c8d9.netlify.app',
            code:'https://github.com/kvijayakrishnan/task'
        },
        {
            id:2,
            src: youtube,
            demo:'https://demo-youtube-clone.netlify.app',
            code:'https://github.com/kvijayakrishnan/Youtube-clone'
        },
        {
            id:3,
            src: passwordreset,
            demo:'https://earnest-quokka-fcdbba.netlify.app',
            code:'https://github.com/kvijayakrishnan/day37-password-reset-server'
        },
    ]



  return (
    <div 
        name='portfolio'
        className='bg-gradient-to-b  from-black to-gray-900 w-full text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-4/5'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
                <p className='py-6 text-xl font-thin'>Take a look at some of my work right here.</p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 '>
                {portfolios.map(({id, src, demo, code})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src}
                            alt=''
                            className='rounded-md duration-300 hover:scale-105 '
                        />
                    <div className='flex items-center justify-center'>
                        <a href={demo} target='_blank'>
                            <button className={`font-thin text-xl w-1/2 px-4 py-3 m-2 duration-200 target:_blank hover:scale-105`} to={demo}>Demo</button>
                        </a>
                        <a href={code} target='_blank'>
                            <button className={`font-thin text-xl w-1/2 px-4 py-3 m-2 duration-200 target:_blank hover:scale-105`} to={code}>Code</button>
                        </a>
                        
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

// 1.23


export default Portfolio