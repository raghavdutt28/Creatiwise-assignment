const SecondaryBtn = ({text}) => {

    return (
        <button className="px-[24px] py-[8px] gap-[10px] bg-transparent text-white text-btnm md:text-btn rounded-[100px] border-[1px] border-white uppercase whitespace-nowrap cursor-pointer">
            {text}
        </button>
    )
}

export default SecondaryBtn;