import { certifications, publication } from "../data/resumeData.js";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Certifications &amp; Achievements</p>
          <h2>Continued learning</h2>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div className="certifications__card" key={cert.title + cert.issuer}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="certifications__publication">
          <p className="eyebrow">Research Publication</p>
          <h3>{publication.title}</h3>
          <p>{publication.venue}</p>
        </div>
      </div>
    </section>
  );
}
