import Navigation from "../components/Navigation";
import Project from "../components/Project";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="w-[calc(100vw_-_80px)] h-[calc(100vh_-_80px)] translate-x-[40px] translate-y-[40px] outline outline-2 text-blue-900 min-w-fit">
      <Navigation />
      <div className="absolute bottom-0 right-0 m-[30px]">
        {projects.map(project => (
          <Project title={project.title} desc={project.desc} link={project.link} />
        ))}
      </div>
    </div>
  )
}
