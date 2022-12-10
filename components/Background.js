
export default function Background() {
    return (
        <div className="absolute w-screen h-screen">
            {/* Effects under navigation */}
            <div className="bg-[#A9E5BB] m-3 absolute w-64 h-64 rounded-full top-44 mix-blend-multiply filter blur-3xl opacity-80 animate-bubbleDown animation-delay-4000" />
            <div className="bg-[#F7B32B] m-3 absolute w-64 h-64 rounded-full left-44 mix-blend-multiply filter blur-3xl opacity-80 animate-bubbleDown" />
            <div className="bg-[#FCF6B1] m-3 absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-bubbleDown animation-delay-2000" />

            {/* Effects under content */}
            <div className="bg-red-300 m-5 absolute w-80 h-80 rounded-full bottom-52 right-0 mix-blend-multiply filter blur-3xl opacity-80 animate-bubbleUp animation-delay-4000" />
            <div className="bg-blue-300 m-5 absolute w-80 h-80 rounded-full bottom-0 right-52 mix-blend-multiply filter blur-3xl opacity-80 animate-bubbleUp" />
            <div className="bg-pink-300 m-5 absolute w-80 h-80 rounded-full bottom-0 right-0 mix-blend-multiply filter blur-3xl opacity-80 animate-bubbleUp animation-delay-2000" />
        </div>
    )
}
