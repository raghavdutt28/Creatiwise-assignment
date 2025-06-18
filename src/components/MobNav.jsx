import React, { useState, useEffect, useRef } from 'react';

const menuItems = ['Home', 'About', 'Projects', 'Contact'];

const MobNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div onClick={handleOpen} className="menu-icon cursor-pointer z-50 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity" />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen w-1/2 max-w-[270px] bg-white z-50 text-dark
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-[20px] flex flex-col gap-[20px] h-full">
          <div className="flex justify-between items-center">
            <h3 className="text-heading3m md:text-heading3">Menu</h3>
            <div onClick={handleClose} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <nav className="text-btnm md:text-btn text-dark list-none flex flex-col mt-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  handleClose(); // Close after selecting
                }}
                className={`px-[24px] py-[8px] cursor-pointer w-fit rounded-[24px] transition-colors duration-200 ${
                  activeIndex === index ? 'bg-dark text-white' : ''
                }`}
              >
                {item}
              </li>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobNav;
