import Link from "next/link";

export default function Navigation() {
    return (
        <div className="absolute top-[30px] left-[30px] drop-shadow-md">
            <h1 className="text-[48px] md:text-[64px] h-[68px] md:h-[80px] duration-100">Nicholas Ly</h1>
            <h3 className="text-[16px] mb-[30px] duration-100">Software Engineer & Web Developer</h3>
            <div className="w-fit text-[20px]">
                <Link href="/">
                    <p className="duration-100 hover:font-bold">Home</p>
                </Link>
                <Link href="/about"> 
                    <p className="duration-100 hover:font-bold">About</p>
                </Link>
                <Link href="/projects">
                    <p className="duration-100 hover:font-bold">Projects</p>
                </Link>
                <Link href="/contact">
                    <p className="duration-100 hover:font-bold">Contact</p>
                </Link>
            </div>
        </div>
    )
}