import React from 'react'
import aboutImg from '../../assets/about_img.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-screen'>
            <div>
                <h3 className='text-2xl text-center pt-5 font-bold'>About me</h3>
                <span className='text-center text-[#02A646] font-semibold'><p>Introduction</p></span>
            </div>
            <div className='md:flex mt-5'>
                <div>
                    <img src={aboutImg} className='md:w-1/2 rounded-2xl mx-auto'></img>
                </div>
                <div>
                    <p className='mx-5 mt-4' >
                        Hello there! Myself Sultan Md.Ayman.I have completed my BSc in CSE from Premier University Chittagong in April 2022.
                        Currently I'm trying to improve my skills as a Frontend Developer and also learning Backend Development.
                        I have interest in Graphic Design also.Specially in Logo, Business Card, Poster design etc.
                    </p >
                </div>
            </div>
        </div>
    )
}

export default About



