import { useState } from "react";
import Subheading from "../components/Subheading";
import { faqData } from "../data";

const FaqSection = ({ subheading }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="px-[20px] py-[30px] md:px-[100px] md:py-[64px] text-white flex flex-col gap-[32px]">
      <Subheading text={subheading} />
      <ul className="flex flex-col gap-[32px]">
        {faqData.map((item, index) => (
          <li
            onClick={() => handleClick(index)}
            key={index}
            className="gap-[8px] cursor-pointer"
          >
            <h4 className="text-heading3m md:text-heading3">{item.Question}</h4>
            {activeIndex === index && (
              <p className="text-reg2m md:text-reg2 font-poppins text-gray">{item.Answer}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FaqSection;
