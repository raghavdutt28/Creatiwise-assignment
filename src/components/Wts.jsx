
const Wts = ({ data }) => {

    return (
        <div className='flex flex-col gap-[32px]'>
            <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-5">
                <div className="flex gap-[16px] items-center row-span-1 md:col-span-2 z-10">
                    <img src={data.Image} alt="Profile Image" />
                    <div className="flex flex-col gap-[4px]">
                        <h5 className="text-heading4m md:text-heading4">{data.Name}</h5>
                        <p className="text-reg2m md:text-reg2 font-poppins text-gray">{data.Company}</p>
                    </div>
                </div>
                <div className="relative row-span-2 md:col-span-3">
                    <div className="absolute z-0 -top-2 md:-top-12">
                        <svg width="113" height="97" viewBox="0 0 113 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.6465 90.8538L5.64648 90.8538L5.64648 49.7765C5.64648 31.4066 15.105 18.3095 34.0222 10.4852C37.7349 8.9544 41.978 7.50862 46.7515 6.14788L53.5139 19.9253C42.641 23.5823 36.0553 28.3024 33.757 34.0855C32.6962 36.6369 32.1658 39.6985 32.1658 43.2705L53.6465 43.2705L53.6465 90.8538Z" fill="#CBCBCB" fillOpacity="0.48" />
                            <path d="M107.293 90.8538L59.293 90.8538L59.293 49.7765C59.293 31.4066 68.7515 18.3095 87.6687 10.4852C91.3814 8.9544 95.6245 7.50862 100.398 6.14788L107.16 19.9253C96.2874 23.5823 89.7018 28.3024 87.4035 34.0855C86.3427 36.6369 85.8123 39.6985 85.8123 43.2705L107.293 43.2705L107.293 90.8538Z" fill="#CBCBCB" fillOpacity="0.48" />
                        </svg>

                    </div>
                    <div className="z-10">
                        <h4 className="text-heading3m md:text-heading3 break-words whitespace-normal">{data.Text}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wts;