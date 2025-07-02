import React from "react";
import "./components/css/section7.css";

export default function Section7() {
  return (
    <section className="section footer-section">
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/company-logos/chromezy-logo.png" alt="Chromezy" className="footer-logo" />
            <p>
              Not just about software & product development; we're your tech
              partners crafting next-gen digital excellence.
            </p>
            <p className="phone-no"><img src="/assets/phone.png" /> +91 7207371207</p>
            <p className="mail-id"><img src="/assets/mail.png" /> sales@chromezy.com</p>
          </div>

          <div className="footer-links">
            <div className="links1">
              <p>Home</p>
              <p>About Us</p>
              <p>Career</p>
              <p>Case Study</p>
              <p className="highlight">Join the Team</p>

            </div>
            <div className="links2">
              <p>AI</p>
              <p>MVP</p>
              <p>SaaS</p>
              <p>E-commerce</p>
              <p className="highlight">Work with us</p>

            </div>
            {/* <div>
              <h4>Get Involved</h4>
            </div> */}
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025| Manilla Designs, All Rights Reserved | Designed by Naveen Kumar</p>
          <div className="footer-socials">
            <p style={{marginTop: "6px"}} >Connect with us:</p>
            <a href="#"><img src="/assets/fb.png" /></a>
            <a href="#"><img src="/assets/insta.png" /></a>
            <a href="#"><img src="/assets/in.png" /></a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
