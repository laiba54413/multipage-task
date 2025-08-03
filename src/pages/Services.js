import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h1 className="services-title">📦Our Development Services</h1>
      <p className="services-subtitle">
        We combine creativity, performance, and modern tech to deliver reliable, scalable solutions.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Branding</h3>
          <p>Build a memorable brand with design consistency and messaging that speaks to your audience.</p>
        </div>
        <div className="service-card">
          <h3>Quality</h3>
          <p>We ensure clean, tested, and maintainable code that scales with your product.</p>
        </div>
        <div className="service-card">
          <h3>Design</h3>
          <p>UI/UX that delights users and drives engagement across web and mobile platforms.</p>
        </div>
        <div className="service-card">
          <h3>Creativity</h3>
          <p>From ideation to production — we bring innovative solutions tailored to your needs.</p>
        </div>
        <div className="service-card">
          <h3>Web & Mobile Apps</h3>
          <p>Build fast, scalable, and responsive applications with modern web technologies.</p>
        </div>
        <div className="service-card">
          <h3>Future-Proof Tech</h3>
          <p>Expertise in React, Node.js, React Native, Electron, and scalable cloud architecture.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
