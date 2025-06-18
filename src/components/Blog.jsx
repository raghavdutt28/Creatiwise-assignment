import PrimaryBtn from "./PrimaryBtn";
import TertiaryBtn from "./TertiaryBtn";

const Blog = ({ image, title, date, tags }) => {

    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px] md:gap-[32px]">
            <img className="w-full md:w-[286px]" src={image} alt="Image" />
            <div className="w-full flex flex-col gap-[16px]">
                <p className="text-reg2m md:text-reg2 font-poppins text-gray">{date}</p>
                <h3 className="text-heading2m md:text-heading2">{title}</h3>
                <ul className='flex gap-[8px]'>
                    {tags.map((item, index) => (
                        <li key={index}>
                            <TertiaryBtn
                                key={index}
                                text={item}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <PrimaryBtn text="Read" />
            </div>
        </div>
    )
}

export default Blog;