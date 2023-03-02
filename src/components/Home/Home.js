import React from 'react'
import heroImage from '../../assets/heroImage.jpg';
import { IoMdArrowDropright } from "react-icons/io";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-white via-white to-purple-500'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-4'>
          <h2 className='text-4xl sm:text-5xl'>Hello, I'm</h2>
          <h1 className='text-5xl sm:text-6xl font-bold py-4'>Sultan Md. Ayman</h1>
          <h2 className='text-4xl sm:text-5xl'>Frontend Developer</h2>
          <p className='text-gray-900 pt-4 max-w-md'>I'm a Frontend Developer, currently living in Chittagong Bangladesh.
            Every time I write a line of code, I try to make the web look beautiful.</p>
          <div>
            <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-[#5805ff] cursor-pointer'>
              Contact Me
              <span className='group-hover:rotate-90 duration-300'>
                <IoMdArrowDropright size={25}/>
              </span>
            </button> 
          </div>  
        </div>

        {/* hero image */}
        <div>
            {/* <img src={heroImage} alt='sm-ayman' className='rounded-2xl mx-auto w-2/3 md:w-full'></img> */}
        </div>
      </div>
    </div>
  )
}

export default Home