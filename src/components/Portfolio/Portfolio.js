import React from 'react';
import countryInfo from '../../assets/portfolio/country-info.JPG';
import goodsEra from '../../assets/portfolio/goodsera-bd.JPG';
import hotGadgets from '../../assets/portfolio/hot-gadgets.JPG';
import leaderBoard from '../../assets/portfolio/leader-board.JPG';
import portfolio2 from '../../assets/portfolio/portfolio2.JPG';
import portfolio3 from '../../assets/portfolio/portfolio3.JPG';
import simpleCalc from '../../assets/portfolio/simple-calculator.JPG';
import tennis from '../../assets/portfolio/tennis.JPG';
import weatherApp from '../../assets/portfolio/weather-app.JPG';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: countryInfo,
            title: 'Country Info',
            href: ''
        },
        {
            id: 2,
            src: goodsEra,
            title: 'GoodsEra E-commerce',
            href: ''
        },
        {
            id: 3,
            src: hotGadgets,
            title: 'Hot Gadgets',
            href: ''
        },
        {
            id: 4,
            src: leaderBoard,
            title: 'Leader Board',
            href: ''
        },
        {
            id: 5,
            src: portfolio2,
            title: 'Demo Portfolio',
            href: ''
        },
        {
            id: 6,
            src: portfolio3,
            title: 'Demo Portfolio',
            href: ''
        },
        {
            id: 7,
            src: simpleCalc,
            title: 'Simple Calculator',
            href: ''
        },
        {
            id: 8,
            src: tennis,
            title: 'Tennis',
            href: ''
        },
        {
            id: 9,
            src: weatherApp,
            title: 'Weather App',
            href: ''
        },

    ]

    return (
        <div name='portfolio' className='md:h-auto bg-gradient-to-b from-indigo-500 via-white to-gray-200'>
            <div className='mb-10'>
                <h3 className='text-2xl text-center pt-5 font-bold'>Portfolio</h3>
                <span className='text-center text-white font-semibold'><p>My Recent Works</p></span>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-20'>
                    
            {
                portfolios.map(({ id, src, href, title }) => (
                 
                        <div key={id} className='group hover:bg-[#02225A] bg-white shadow-md border-b-indigo-500 rounded-2xl'>
                            <img src={src} className='rounded-3xl p-5 hover:scale-110 duration-100' alt=''></img>
                            <div className='flex items-center justify-center flex-col font-bold'>
                                <p className='group-hover:text-white'>{title}</p>
                                <button className='group-hover:text-blue-500 py-2 hover:animate-pulse text-gray-500'><a href='{href}'>Live Preview</a></button>
                            </div>
                        </div>
                    
                ))
            }
            </div>


        </div>
    );
};

export default Portfolio;