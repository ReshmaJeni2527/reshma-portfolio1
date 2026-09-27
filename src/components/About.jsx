import { profile, strengths } from "../data/resumeData.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__photo">
          <div className="about__photo-frame">
            <img
              src="/images/profile.jpeg"
              alt={`${profile.name} profile`}
            />
          </div>
        </div>

        <div className="about__text">
          <p className="eyebrow">About Me</p>
          <h2>A developer who likes things that work cleanly.</h2>
          <p className="about__bio">{profile.summary}</p>

          <ul className="about__strengths">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
