import React from 'react'
import moviesfrontend from '../assets/portfolio/movies-frontend.png'
import passwordreset from '../assets/portfolio/password-reset.png'
import youtube from '../assets/portfolio/Youtube.png'
import userauth from '../assets/portfolio/user-auth.png'
import notesapp from '../assets/portfolio/notes-app.png'

function Portfolio() {
    const portfolios = [
        // {
        //     id:1,
        //     src: moviesfrontend,
        //     description:'In this app a simple reactjs app in movies adding a like button increment & decrement the likes and dislikes',
        //     demo:'https://heartfelt-florentine-46c8d9.netlify.app',
        //     bcode:'https://github.com/kvijayakrishnan/task',
        //     // fcode:"",
        // },
        // {
        //     id:2,
        //     src: youtube,
        //     heading: 'Youtube Clone',
        //     description:'In this app clone a youtube and show the content of youtube using html css js',
        //     demo:'https://demo-youtube-clone.netlify.app',
        //     bcode:'https://github.com/kvijayakrishnan/Youtube-clone',
        //     fcode:"",
        // },
        {
            id:1,
            src: notesapp,
            heading: 'Notes application',
            description:'Users can create, view, edit, and delete notes with tags after signing up and logging in',
            demo:'https://vijayuserauth.netlify.app/',
            bcode:'https://github.com/kvijayakrishnan/Notes-app-backend',
            fcode:"https://github.com/kvijayakrishnan/Notes-app-frontend",
        },
        
        {
            id:2,
            src: userauth,
            heading: 'Session Management',
            description:'Users will register with their valid email addresses, and an activation link will be sent to them.',
            demo:'https://vijayuserauth.netlify.app/',
            bcode:'https://github.com/kvijayakrishnan/UserAuth-backend',
            fcode:"https://github.com/kvijayakrishnan/UserAuth-frontend",
        },
        
        {
            id:3,
            src: passwordreset,
            heading: 'Reset User password',
            description:'If a user forgets their password, a password reset link will be sent to their valid email address',
            demo:'https://earnest-quokka-fcdbba.netlify.app',
            bcode:'https://github.com/kvijayakrishnan/day37-password-reset-server',
            fcode:"https://github.com/kvijayakrishnan/day37-password-reset-client",
        },
        
        
    ]



  return (
    <div 
        name='portfolio'
        className='bg-gradient-to-b  from-black to-gray-900 w-full text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
                <p className='py-4 text-xl font-thin'>Take a look at some of my work right here.</p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 '>
                {portfolios.map(({id, src,heading, description, demo, bcode, fcode})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src}
                            alt=''
                            className='rounded-md duration-300 hover:scale-105 '
                        />
                        <div key={description} >
                            <h1 className=' text-xl pl-2 pt-1 text-center pt-2 text-gray-500'>{heading}</h1>
                            <p className=' text-sm font-thin p-1 pl-2'>{description}</p>
                            
                        </div>
                    
                    <div className='flex items-center justify-center'>
                        <a href={demo} target='_blank'>
                            <button className={`font-thin text-base w-1 px-4 py-1 m-2 duration-200 target:_blank hover:scale-105`} to={demo}>Live</button>
                        </a>
                        <a href={bcode} target='_blank'>
                            <button className={`font-thin text-base w-1/2 px-10 py-1 m-2 duration-200 target:_blank hover:scale-105`} to={bcode}>Frontend</button>
                        </a>
                        <a href={fcode} target='_blank'>
                            <button className={`font-thin text-base w-1/2 px-0 py-1 m-2 duration-200 target:_blank hover:scale-105`} to={fcode}>Backend</button>
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