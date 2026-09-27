import { projects } from "../data/resumeData.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Things I've built</h2>
          <p>Academic and self-directed projects applying my web and Python skills.</p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
