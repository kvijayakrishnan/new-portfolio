import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import sql from '../assets/mysql.png'
import mongo from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import netlify from '../assets/netlify.png'
import github from '../assets/github.png'





const Skill = () => {

    const skills = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-400'
        },
        {
            id:1,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-400'
        },
        {
            id:1,
            src:js,
            title: 'Java Script',
            style: 'shadow-yellow-400'
        },
        {
            id:1,
            src:react,
            title: 'React Js',
            style: 'shadow-sky-400'
        },
        {
            id:1,
            src:node,
            title: 'Node Js',
            style: 'shadow-green-700'
        },
        {
            id:1,
            src:sql,
            title: 'My Sql',
            style: 'shadow-blue-300'
        },
        {
            id:1,
            src:mongo,
            title: 'Mongo DB',
            style: 'shadow-green-300'
        },
        {
            id:1,
            src:bootstrap,
            title: 'Bootstrap',
            style: 'shadow-violet-600'
        },
        {
            id:1,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:1,
            src:netlify,
            title: 'Netlify',
            style: 'shadow-green-800'
        },
        {
            id:1,
            src:github,
            title: 'Github',
            style: 'shadow-white'
        },
        
    ]

  return (
    <div
        name='skills'
        className='bg-gradient-to-b from-gray-900 to-black w-full h-screen'
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline capitalize sm:mt '>
                    skills
                </p>
                <p className='py-6 text-xl font-thin'>
                    Explore some of my skills here.
                </p>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center  px-12 sm:px-0'>
                {skills.map(({id, src, title, style}) =>(
                    
                    <div 
                        key={id}
                        className={` text-xl font-thin shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                        <img src={src} alt='' className='w-10 mx-auto' />
                        <p className='mt-2'>{title}</p>
                    </div>

                ))}
                
            </div>
            </div>

            
        </div>
    </div>
  )
}

export default Skill