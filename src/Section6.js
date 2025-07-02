import React from "react";
import "./components/css/section6.css";

export default function SectionContact() {
  return (
    <>
      <section className="section contact-section">
        <div className="contact-left">
          <img src="/assets/contact-illustration.png" alt="Contact" className="contact-image" />
        </div>

        <div className="contact-right">
          <div className="form-box">
            <h3>Let’s Talk!</h3>
            <form className="contact-form">
              <input type="text" placeholder="Enter your name" required />

              <input type="email" placeholder="Enter your email" required />

              <input type="tel" placeholder="Enter your phone" required />

              <input type="text" placeholder="Your need" required />

              <textarea placeholder="Describe your request..." required />

              <button type="submit">Send Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
