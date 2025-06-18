import React, { useState } from 'react';
import SecondaryBtn from '../components/SecondaryBtn';
import FullNav from '../components/FullNav';
import MobNav from '../components/MobNav';

const menuItems = ['Home', 'About', 'Projects', 'Contact'];


const Header = () => {
    return (
        <header className="w-full flex justify-between items-center px-[20px] md:px-[100px] py-[32px]">
            <div className='logo order-2 md:order-1 translate-x-[100%] md:translate-x-[0px]'>
                <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9.48148" height="32" fill="white" />
                    <rect x="23.7036" width="9.48148" height="32" fill="white" />
                    <ellipse cx="16.5927" cy="7.11123" rx="5.92593" ry="5.92593" fill="white" />
                    <ellipse cx="40.2963" cy="24.8888" rx="5.92593" ry="5.92593" fill="white" />
                </svg>
            </div>
            <div className='nav-full hidden md:block order-1 md:order-2'>
                <FullNav/>
            </div>
            <div className='nav-mobile md:hidden order-1 md:order-2'>
                <MobNav/>
            </div>
            <div className='order-3 md:order-3'>
                <SecondaryBtn text="HIRE ME" />
            </div>
        </header>
    )
}

export default Header;