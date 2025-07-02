import React, { useEffect, useState } from "react";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Background from "./Background";
import "./App.css";
import "./components/css/Navbar.css";
import Navbar from "./Navbar";

export default function App() {
  const preloadImages = () => {
    const imagePaths = [
      // backgrounds
      "/assets/backgrounds/base.png",
      "/assets/backgrounds/sec0.png",
      "/assets/backgrounds/sec1.png",
      "/assets/backgrounds/AI.png",
      "/assets/backgrounds/ai1.png",
      "/assets/backgrounds/Arrow left.png",
      "/assets/backgrounds/Arrow right.png",
      "/assets/backgrounds/B2B & B2C Commerce Transformation.png",
      "/assets/backgrounds/bi_quote.png",
      "/assets/backgrounds/contact-illustration.png",
      "/assets/backgrounds/ecommerce.png",
      "/assets/backgrounds/fb.png",
      "/assets/backgrounds/in.png",
      "/assets/backgrounds/Innovative.png",
      "/assets/backgrounds/insta.png",
      "/assets/backgrounds/mail.png",
      "/assets/backgrounds/MVP.png",
      "/assets/backgrounds/mvp1.png",
      "/assets/backgrounds/phone.png",
      "/assets/backgrounds/SaaS.png",

      // company logos
      "/assets/backgrounds/company-logos/airflow.png",
      "/assets/backgrounds/company-logos/campion.png",
      "/assets/backgrounds/company-logos/chromezy-logo.png",
      "/assets/backgrounds/company-logos/comall.png",
      "/assets/backgrounds/company-logos/fonnia.png",
      "/assets/backgrounds/company-logos/kiri.png",
      "/assets/backgrounds/company-logos/masterstudy.png",
      "/assets/backgrounds/company-logos/modernize.png",
      "/assets/backgrounds/company-logos/orofill.png",

      // success cards
      "/success cards/Prototype - 4.png",
      "/success cards/success1.png",
      "/success cards/success2.png",
      "/success cards/success3.png",
      "/success cards/success4.png",
      "/success cards/success5.png",

      // root assets
      "/Glob.png",
      "/Main Ball.png",
      "/Main Ball Blur.png",
      "/sec0.1.png",
      "/Triangle.png",
    ];

    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  };
  const [section, setSection] = useState(0);

  useEffect(() => {
    preloadImages();
    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const top = section1.getBoundingClientRect().top;
      if (top < window.innerHeight / 2) {
        setSection(1);
      } else {
        setSection(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Navbar />
    <Background section={section} />
    <div className="main">
      <div id="section0" style={{marginTop: "-7%"}}>
        <Section0 />
      </div>
      <div id="section1" style={{height: "100%"}}>
        <Section1 />
      </div>
      <div id="section2" style={{height: "100%", marginTop: "10%"}}>
        <Section2 />
      </div>
      <div id="section3"style={{height: "100%"}}>
        <Section3 />
      </div>
      <div id="section4" style={{height: "100%",  marginTop: "10%"}}>
        <Section4 />
      </div>
      <div id="section5" style={{height: "100%"}}>
        <Section5 />
      </div>
      <div id="section6" style={{height: "100%"}}>
        <Section6 />
      </div>
      <div id="section7" style={{height: "10%"}}>
        <Section7 />
      </div>
    </div>
  </>
  );
}
