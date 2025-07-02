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
  const [section, setSection] = useState(0);

  useEffect(() => {
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
