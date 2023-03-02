import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin size={30} className='group-hover:rotate-45 duration-200'></FaLinkedin>
                </>
            ),
            href: 'https://www.linkedin.com/in/sultan-md-ayman/',
            style: '',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FaGithub size={30} className='group-hover:rotate-45 duration-200'></FaGithub>
                </>
            ),
            href: 'https://github.com/sm-ayman/',
            style: '',
        },
        {
            id: 3,
            child: (
                <>
                    Facebook
                    <FaFacebook size={30} className='group-hover:rotate-45 duration-200'></FaFacebook>
                </>
            ),
            href: 'https://www.facebook.com/people/Sultan-Md-Ayman/100005943017731',
            style: '',
        },
        {
            id: 4,
            child: (
                <>
                    Mail
                    <HiOutlineMail size={30} className='group-hover:rotate-45 duration-200'></HiOutlineMail>
                </>
            ),
            href: 'mailto:sultanmdayman@gmail.com',
            style: '',
        },
        {
            id: 5,
            child: (
                <>
                    Resume
                    <BsFillPersonFill size={30} className='group-hover:rotate-45 duration-200'></BsFillPersonFill>
                </>
            ),
            href: './Sultan Md. Ayman.pdf',
            style: '',
            download: true,
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id,child, href, style, download}) => (
                    <li key={id} className={'group flex justify-between items-center w-40 h-14 px-4 bg-[#6B5ACD] hover:bg-[#033A80] text-white md:ml-[-100px] rounded-r-md hover:rounded-r-full hover:ml-[0px] duration-200' + " "+ style}>
                        
                        <a 
                        href={href} 
                        className='flex justify-between items-center w-full'
                        download={download}
                        target='_blank'
                        >
                          {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks