import Navigation from "../components/Navigation";
import Role from "../components/Role";
import about from "../data/about";

export default function About() {
  return (
    <div className="w-screen h-screen min-w-fit">
      <Navigation />
      <div className="absolute bottom-0 right-0 m-[30px]">
        {about.map(role => (
          <Role source={role.source} title={role.title} />
        ))}
      </div>
    </div>
  )
}
