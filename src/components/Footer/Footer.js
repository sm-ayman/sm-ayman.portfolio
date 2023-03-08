import React from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp, SiSkype, SiGnusocial } from 'react-icons/si';

const Footer = () => {
    const footerLinks = [
        {
            id:1,
            icon: <SiFacebook size={25}></SiFacebook>,
            href: 'https://www.facebook.com/profile.php?id=100005943017731',
        },
        {
            id:2,
            icon: <SiInstagram size={25}></SiInstagram>,
            href: 'https://www.instagram.com/sm_ayman/',
        },
        {
            id:1,
            icon: <SiWhatsapp size={25}></SiWhatsapp>,
            href: 'https://wa.me/01866328642',
        },
        {
            id:1,
            icon: <SiSkype size={25}></SiSkype>,
            href: 'https://join.skype.com/invite/wcnCBBHS0pPd',
        },
    ]
    return (
        <div className='bg-[#033A80] p-5 flex flex-col justify-center items-center'>
            {/* social links  */}
            <div>
                <h2 className='flex justify-center font-bold text-gray-200' >sm_ayman</h2>
                <div class="footer-social flex flex-row justify-center items-center">
                    {
                        footerLinks.map(({id, icon, href}) =>(
                            <a className='px-5 py-4 text-white hover:scale-125  duration-300' key={id} href={href}>{icon}</a>
                        ))
                    }
                    
                </div>
            </div>
            {/* copyright */}
            <div className=''>
                <p className='font-bold text-white'>Created By <a href="" className='text-[#1FBF8F]'>Sultan Md. Ayman</a> | All Rights Reserved | © 2023</p>
            </div>
        </div>
    );
};

export default Footer;