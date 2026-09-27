import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
