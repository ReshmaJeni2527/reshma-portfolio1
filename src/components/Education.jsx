import { education } from "../data/resumeData.js";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2>Academic background</h2>
        </div>

        <div className="education__list">
          {education.map((item) => (
            <div className="education__row" key={item.degree}>
              <span className="education__period">{item.period}</span>
              <div className="education__body">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
              <span className="education__detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
