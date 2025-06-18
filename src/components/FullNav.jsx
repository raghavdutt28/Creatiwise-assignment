import React, { useState } from 'react';

const menuItems = ['Home', 'About', 'Projects', 'Contact'];


const FullNav = () => {

    const [activeIndex, setactiveIndex] = useState(0);
    return (
            <nav className=' text-btnm md:text-btn text-white list-none flex'>
                {menuItems.map((item, index) => (
                <li key={index} onClick={() => setactiveIndex(index)} className={'px-[24px] py-[8px] cursor-pointer '+ (activeIndex === index? 'bg-white rounded-[24px] text-dark' : '')}>
                    {item}
                </li>
                ))}
            </nav>
    )
}

export default FullNav;