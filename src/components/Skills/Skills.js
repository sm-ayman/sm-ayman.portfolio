import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import bootstrap from '../../assets/bootstrap.png';
import tailwind from '../../assets/tailwind.png';
import javascript from '../../assets/javascript.png';
import reactjs from '../../assets/react.png';
import github from '../../assets/github.png';



const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-indigo-600',
    },
    {
      id: 4,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400',
    },
    {
      id: 5,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yelllow-500',
    },
    {
      id: 6,
      src: reactjs,
      title: 'React JS',
      style: 'shadow-blue-600',
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-700',
    },
  ]


  return (
    <div name='skills' className='bg-gradient-to-b from-gray-700 to-white w-full'>
      <div className='mx-auto md:p-32 p-4'>

        <div className='mb-10'>
          <h3 className='text-2xl text-center pt-5 font-bold text-white'>Skills</h3>
          <span className='text-center text-[#02A646] font-semibold'><p>Technologies I've worked with </p></span>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 md:px-12 sm:px-0'>
          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={`group shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt='' className='w-20 mx-auto group-hover:animate-pulse'></img>
                <p className='mt-4 font-bold'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;