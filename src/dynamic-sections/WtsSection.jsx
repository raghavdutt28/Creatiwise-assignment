import { useState } from "react";
import Subheading from "../components/Subheading";
import Wts from "../components/Wts";
import { wtsData } from '../data';

const WtsSection = ({ subheading }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < wtsData.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  return (
    <section className='px-[20px] py-[30px] md:px-[100px] md:py-[64px] text-white flex flex-col gap-[32px]'>
      <Subheading text={subheading} />
        <Wts data={wtsData[index]} />

      <div className="w-full">
        <div className="justify-center flex gap-[16px]">

          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`w-[40px] h-[40px] rounded-full cursor-pointer flex justify-center items-center ${
              index === 0 ? 'bg-gray' : 'bg-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[11px]"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M14.5 5.5H2M2 5.5L6 9.5M2 5.5L6 1.5"
                className="stroke-dark"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={index === wtsData.length - 1}
            className={`w-[40px] h-[40px] rounded-full cursor-pointer flex justify-center items-center ${
              index === wtsData.length - 1 ? 'bg-gray' : 'bg-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] h-[11px]"
              viewBox="0 0 14 11"
              fill="none"
            >
              <path
                d="M0.000488281 5.5L12.5005 5.5M12.5005 5.5L8.50049 1.5M12.5005 5.5L8.50049 9.5"
                className="stroke-dark"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WtsSection;
