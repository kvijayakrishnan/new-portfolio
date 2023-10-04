import React from 'react'

function About() {
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
                I'm a self-taught web developer who designs new features from start to finish, turning ideas into working software. I pay close attention to the user experience and aim to write efficient, reusable code. I'm passionate about blending design, technology, and innovation in all my projects, which I guide from the initial idea to release. Right now, I'm concentrating on full-stack development.
            </p>
        </div>
    </div>
  )
}

export default About