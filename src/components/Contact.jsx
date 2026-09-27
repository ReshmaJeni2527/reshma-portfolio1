import { useState } from "react";
import { profile } from "../data/resumeData.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2>Let's work together</h2>
          <p>
            I'm looking for entry-level Web Developer or Front-End Developer roles.
            Reach out directly or send a quick message.
          </p>

          <ul className="contact__list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <svg className="contact__wave" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="var(--color-accent)"
          d="M0 96c180-48 360-72 540-64s360 48 540 40 240-56 360-40v128H0Z"
        />
      </svg>
    </section>
  );
}
