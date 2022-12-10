
export default function Project({ title, desc, link }) {
    return (
        <div className="text-right">
            <p className="text-[48px] md:text-[64px] h-[68px] md:h-[80px] duration-100 hover:font-bold">
                <a href={link} target='_blank' rel='noreferrer noopener'>{title}</a>
            </p>
            <p className="text-[16px]">{desc}</p>
        </div>
    )
}
