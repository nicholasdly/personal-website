import Navigation from "../components/Navigation"

export default function Home() {
  return (
    <div className="w-[calc(100vw_-_80px)] h-[calc(100vh_-_80px)] translate-x-[40px] translate-y-[40px] outline outline-2 text-blue-900 min-w-fit">
      <Navigation />
      <p className="w-[228px] text-[20px] text-right absolute bottom-[30px] right-[30px]">
        As a recent graduate, I believe software development should be inspiring and
        inclusive. Driven to learn and teach, I am exploring excellence in design
        and engineering through individual and collaborative projects and experiences.
      </p>
    </div>
  )
}
