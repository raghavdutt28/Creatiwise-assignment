import PrimaryBtn from './PrimaryBtn';
import TertiaryBtn from './TertiaryBtn';
const Card = ({ heading, text, tags, image }) => {

    return (
        <div className='relative bg-container rounded-[40px] w-full overflow-hidden'>
            <div className='absolute w-[209px] h-[165px] z-0 bg-accent rounded-full blur-[150px] bottom-10 left-1/2 -translate-x-1/2'></div>
            <div className='w-full relative z-10 p-[32px] gap-[32px] grid grid-rows-2 grid-cols-none lg:grid-rows-none lg:grid-cols-2'>
                <div>
                    <img className='w-full h-full' src={image} alt="img" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className="flex flex-col gap-[16px]">
                        <h3 className="text-heading5m md:text-heading5">{heading}</h3>
                        <p className="text-reg2m md:text-reg2 font-poppins w-9/10">{text}</p>
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
                        <PrimaryBtn text="View Case Study" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;