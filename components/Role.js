
export default function Role({ source, title }) {
    return (
        <div className="text-right text-[20px] mt-[25px]">
            <p className="font-bold">{source}</p>
            <p>{title}</p>
        </div>
    )
}
