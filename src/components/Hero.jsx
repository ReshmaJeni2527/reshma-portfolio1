import { profile, resumeFile } from "../data/resumeData.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__heading">
            Hello, I'm
            <br />
            {profile.name}
          </h1>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={resumeFile} download className="btn btn-outline">
              Download Resume
            </a>
          </div>

          <div className="hero__contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true">•</span>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="hero__figure" aria-hidden="true">
          <svg viewBox="0 0 420 420" className="hero__blob" preserveAspectRatio="xMidYMid meet">
            <path
              fill="var(--color-accent)"
              d="M321.8 55.1c40.9 33.2 63.9 87.9 60.1 140.6-3.8 52.8-34.5 103.6-79.6 133.9-45.1 30.4-104.5 40.2-155.6 21.6-51.2-18.6-94-68.3-101-121.9C38.7 175.7 68 119.9 113.2 84.6c45.1-35.3 106-49.6 155.8-33.9 15.6 4.9 30.4 12.4 52.8 4.4Z"
            />
          </svg>
          <div className="hero__avatar">
            <img
              src="/images/profile.jpeg"
              alt={`${profile.name} profile`}
            />
          </div>
          <div className="hero__badge">
            <strong>MCA</strong>
            <span>Graduate, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
