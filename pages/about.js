import Navigation from "../components/Navigation";
import Role from "../components/Role";
import about from "../data/about";

export default function About() {
  return (
    <div className="w-[calc(100vw_-_80px)] h-[calc(100vh_-_80px)] translate-x-[40px] translate-y-[40px] outline outline-2 text-blue-900 min-w-fit">
      <Navigation />
      <div className="absolute bottom-0 right-0 m-[30px]">
        {about.map(role => (
          <Role source={role.source} title={role.title} />
        ))}
      </div>
    </div>
  )
}
