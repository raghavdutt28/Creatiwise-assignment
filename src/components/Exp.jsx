const Exp = ({ company, role, start, end }) => {

    return (
        <div className="flex justify-between items-center py-[8px] border-b-[1.5px] border-white/50">
            <h4 className="text-heading3m md:text-heading3">{role}</h4>
            <div className="flex flex-col items-start md:items-end gap-[8px]">
                <h5 className="text-heading4m md:text-heading4">{company}</h5>
                <p className="text-regm md:text-reg font-poppins">{start} - {end}</p>
            </div>
        </div>
    )
}

export default Exp;