import { profile } from "../data/resumeData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          {profile.name}
        </a>
        <p>
          © {year} {profile.name}. Built with React &amp; Vite.
        </p>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
