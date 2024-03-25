import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
    const social = [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin />
                </>
            ),
            href:"https://www.linkedin.com/in/vijayakrishnank-mernstackdeveloper/",
            style:'rounded-tr-md',
            download:false
        },
    ]

  return (
    <div className='lg:flex flex-col '>
        <ul>
            <li>
                {social.map(({id, child, href, style, download}) =>{
                    <li
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
                })}
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks