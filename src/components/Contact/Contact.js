import React from 'react';
import { IoIosSend } from 'react-icons/io';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white mt-10'>
            <div className='flex flex-col justify-center mx-auto h-full'>
                <div className='mb-10 pb-8'>
                    <h3 className='text-2xl text-center pt-10 font-bold'>Contact</h3>
                    <span className='text-center text-[#02A646] font-semibold'><p>Connect With Me</p></span>
                </div>
                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/93c287a6-eecc-4d06-8767-9372157e3f9e' method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type='text'
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type='text'
                            name='email'
                            placeholder='Enter your email'
                            className='my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea
                            name='message'
                            placeholder='Your message here'
                            rows={10}
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button className='mx-auto my-5 text-white font-semibold w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-[#5805ff] cursor-pointer hover:scale-110 duration-300'>
                            Send
                            <span>
                                <IoIosSend size={25} className='ml-2'/>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;