import React from "react";
import "./components/css/section0.css";
import Section0Visuals from "./Section0Visuals";

import CountUp from 'react-countup';




export default function Section0() {
  return (
    <section className="section section-hero" style={{ position: "relative", overflow: "hidden" }}>
      {/* Glowing gradient visuals */}
      <Section0Visuals />

      {/* Your actual content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 3 }}>
        <p className="intro">✨ Introducing AI Automation</p>
        <h1 className="hero-title">
          from <span className="blue">CONCEPT</span> <br/>to <span className="purple">REALITY</span>
        </h1>
        <h3 className="subtitle">
          We Engineer your Software Success & Digital Transformation.
        </h3>
        <p className="description">
          At Chromezy, we translate your ideas into market-ready solutions quickly and precisely.
          Leveraging the power of technology and prioritizing user needs, we deliver products that
          are both cutting-edge and user-centric.
        </p>
        <img className="sec0-1" alt="sec0.1" src="/sec0.1.png"/>
        <div className="stats">
          <div><h2>200%</h2><p>Revenue Growth</p></div>
          <div><h2>4X</h2><p>Speed to Market</p></div>
          <div><h2>73%</h2><p>New Orders</p></div>
          <div>
            <h2>
              <CountUp start={0} end={999} duration={4} separator="," suffix="+" />
            </h2>
            <p>Active Users</p>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", bottom: "0px"}}> 
      <br />
        <br />
        <hr
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
          margin: "2rem auto",
          width: "85rem",
          height: "0px",
        }}
      />
        <div className="logos">
          <img className="Masterstudy-logo" src="/company-logos/masterstudy.png" alt="Masterstudy" />
          <img className="Orosill-logo" src="/company-logos/orofill.png" alt="Orosill" />
          <img className="Campion-logo" src="/company-logos/campion.png" alt="Campion" />
          <img className="Kiri-logo" src="/company-logos/kiri.png" alt="Kiri" />
          <img className="Fonnia-logo" src="/company-logos/fonnia.png" alt="Fonnia" />
          <img className="Comall-logo" src="/company-logos/comall.png" alt="Comall" />
          <img className="Modernize-logo" src="/company-logos/modernize.png" alt="Modernize" />
        </div>

      <br />
      <br />
      <hr
      style={{
        border: "1px solid rgba(255, 255, 255, 0.2)",
        margin: "0rem auto",
        width: "85rem",
        height: "0px",
      }}
      />
    </div>
    </section>
    
  );
}
