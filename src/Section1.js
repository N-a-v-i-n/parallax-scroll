import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./components/css/section1.css";
import Section1Visuals from "./Section1Visuals";

export default function Section1() {
  const blurControls = useAnimation();
  const services = [
    {
      title: "MVP",
      desc: "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
      badge: "Our Services",
      button: "Talk to a Product Expert",
      class: "card mvp",
      image: "/assets/MVP.png",
    },
    {
      title: "SaaS",
      desc: "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.",
      badge: "Our Services",
      button: "Talk to a Product Expert",
      class: "card saas",
      image: "/assets/SaaS.png",
    },
    {
      title: "AI",
      desc: "We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes",
      badge: "Our Services",
      button: "Talk to a Product Expert",
      class: "card ai",
      image: "/assets/AI.png",
    },
    {
      title: "B2B & B2C Commerce Transformation",
      desc: "We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.",
      badge: "Our Services",
      button: "Talk to a Ecommerce Expert",
      class: "card commerce",
      image: "/assets/B2B & B2C Commerce Transformation.png",
    },
  ];

  return (
    <section className="section section-product" id="section1">
      <Section1Visuals />
      <div className="section-header">
        <h2>PRODUCT ENGINEERING</h2>
        <p>
          Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.
        </p>
      </div>
      <div className="cards">
        {services.map((item, index) => (
          <div key={index} className={item.class}>
            {item.image && <img src={item.image} alt={item.title} />}
            <div className="badge">{item.badge}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button>
              {item.button} <span>↗</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
