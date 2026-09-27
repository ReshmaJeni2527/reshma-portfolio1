import { skillGroups } from "../data/resumeData.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>What I work with</h2>
          <p>Tools and technologies from my coursework and projects.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__card" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
