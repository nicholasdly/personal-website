
export default function Project({ title, desc, link }) {
    return (
        <div className="text-right">
            <p className="h-[80px] text-[64px] duration-100 hover:font-bold">
                <a href={link} target='_blank' rel='noreferrer noopener'>{title}</a>
            </p>
            <p className="text-[16px]">{desc}</p>
        </div>
    )
}
