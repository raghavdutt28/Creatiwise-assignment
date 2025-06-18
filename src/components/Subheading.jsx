const Subheading = ({ text, viewAll }) => {

    return (
        <div className=" flex justify-between items-center">
            <h3 className='text-white text-heading2m md:text-heading2 flex gap-2 items-center'>
            <span>
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 fill-[#ffffff]"
                >
                    <path d="M16 0L17.5818 10.0968L24 2.14359L20.3215 11.6785L29.8564 8L21.9032 14.4182L32 16L21.9032 17.5818L29.8564 24L20.3215 20.3215L24 29.8564L17.5818 21.9032L16 32L14.4182 21.9032L8 29.8564L11.6785 20.3215L2.14359 24L10.0968 17.5818L0 16L10.0968 14.4182L2.14359 8L11.6785 11.6785L8 2.14359L14.4182 10.0968L16 0Z" />
                </svg>

            </span>
            {text}
        </h3>
        {
            viewAll ? <p className="text-reg2m md:text-reg2 underline cursor-pointer">view all</p>: <></>
        }
        </div>
        
    )
}

export default Subheading;