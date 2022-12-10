import Navigation from "../components/Navigation";
import Project from "../components/Project";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="w-screen h-screen min-w-fit">
      <div className="absolute bottom-0 right-0 m-[30px]">
        {projects.map(project => (
          <Project title={project.title} desc={project.desc} link={project.link} />
        ))}
      </div>
    </div>
  )
}
