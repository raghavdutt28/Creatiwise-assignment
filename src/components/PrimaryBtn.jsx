const PrimaryBtn = ({text}) => {

    return (
        <button className="px-[32px] py-[16px] gap-[10px] bg-white text-black text-btnm md:text-btn rounded-[100px] whitespace-nowrap cursor-pointer">
            {text}
        </button>
    )
}

export default PrimaryBtn;