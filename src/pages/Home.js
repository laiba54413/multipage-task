import React from 'react';
import './Home.css';  

function Home (){
  return (
    <div className="home">
    
      <section className="hero">
        <div className="hero-overlay">
          <h1 >👋Welcome to Our Web Development Team🚀</h1>
          </div>

      </section >
      <section className="about">
        <h1 style={{textAlign:'center'}}>💡  Who we are</h1>
        <p style={{textAlign:"justify"}}>We are a passionate web development team that specializes in designing responsive 
            and user-friendly websites. Our goal is to help companies enhance their online presence 
            with creative designs and effective web solutions.</p>
      </section>

      <section className="services">
        <h2>🤝 We are here for You</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>🎨Web Design</h3>
            <p>We will create beautiful and engaging website designs that capture your brand identity.</p>
          </div>
          <div className="service-card">
            <h3>💻Web Development</h3>
            <p>Building functional, fast, and scalable websites that perform across all devices.</p>
          </div>
          <div className="service-card">
            <h3>📈SEO Optimization</h3>
            <p>We optimize websites to rank higher on search engines, improving visibility and traffic.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;
