import React from 'react'
import aboutImg from '../../assets/about_img.jpg'
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { IoMdArrowDropright } from 'react-icons/io';
import { HiOutlineDownload } from 'react-icons/hi';



const About = () => {
    return (
        <div name='about' className='w-full h-screen'>
            <div className='my-10'>
                <h3 className='text-2xl text-center pt-5 font-bold'>About me</h3>
                <span className='text-center text-[#02A646] font-semibold'><p>Introduction</p></span>
            </div>
            <div className='md:flex'>
                <div className='flex-1 md:w-32'>
                    <img src={aboutImg} className='w-1/2 rounded-2xl mx-auto shadow-md my-5'></img>
                </div>
                <div className='flex-1 md:w-64 mx-5'>
                    <p className='md:mr-32 md:my-10 text-justify' >
                        Hello there! Myself Sultan Md. Ayman.I have completed my BSc in CSE from Premier University Chittagong in April 2022.
                        Currently I'm trying to improve my skills as a Frontend Developer and also learning Backend Development.
                        I have interest in Graphic Design also. Specially in Logo, Business Card, Poster design etc.
                    </p >

                    <p className='w-full flex antialiased hover:subpixel-antialiased mt-5'>
                        <FiPhone size={25} className='mr-5 mb-5' /> +88 01866328642 || +88 01533178125
                    </p>

                    <p className='w-full flex antialiased hover:subpixel-antialiased'>
                        <AiOutlineMail size={25} className='mr-5 mb-5' /> sultanmdayman@gmail.com
                    </p>
                    <a href='./Sultan Md. Ayman.pdf' download={true} className='group text-white content-center font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-[#5805ff] cursor-pointer'>
                        Download CV
                        <span className='group-hover:animate-pulse'>
                            <HiOutlineDownload size={25} className='ml-1' />
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default About



