const Point = ({ heading, text }) => {

    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex gap-2 items-center">
                <div>
                    <svg
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 h-2 fill-white"
                    >
                        <g clipPath="url(#clip0_23_167)">
                            <path d="M0.92627 1.14001H7.07027V7.28401H0.92627V1.14001Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_23_167">
                                <rect width="8" height="7" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <h5 className="text-heading4m md:text-heading4">
                    {heading}
                </h5>
            </div>
            <p className=" text-gray text-regm md:text-reg font-poppins">{text}</p>
        </div>
    )
}

export default Point;