import React from "react";
import './Contact.css';


function Contact(){
    return (
    <div className="contact-page">
      <main className="contact-main">
        <section className="contact-info">
          <h1>We are here to help!</h1>
          <p>
            Let us know how we can best serve you. Use the contact form to email us 
            or select from the topics below that best fit your needs. It's an honor 
            to support you in your journey towards your success.
          </p>
        </section>

        <form className="contact-form" >
          <input
            type="text"
            name="name"
            placeholder="Name"

          />
          <input
            type="email"
            name="email"
            placeholder="Email"

          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
        
          />
          <textarea
            name="comment"
            placeholder="Comment"
        
          />
          <button type="submit" className="send-btn">SEND MESSAGE</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;