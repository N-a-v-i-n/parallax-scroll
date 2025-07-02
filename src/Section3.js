import React from "react";
import "./components/css/section3.css";

const cards = [
  {
    title: "FinConnect",
    description: "Customer Relationship Management (CRM)",
    image: "/success cards/success1.png",
  },
  {
    title: "HealthSync",
    description: "Health Tracking App for Patients and Doctors",
    image: "/success cards/success2.png",
  },
  {
    title: "Commerce360",
    description: "Online Store, Multivendor Marketplace & E-commerce Apps",
    image: "/success cards/success3.png",
  },
  {
    title: "PrintwithAI",
    description: "Web-to-Print Software / Online Design Tool / Product Designer Tool",
    image: "/success cards/success4.png",
  },
  {
    title: "PM Insights",
    description: "Project Management Tool (SaaS & Hosted)",
    image: "/success cards/success5.png",
  },
];

export default function Section2() {
  return (
    <section className="section success-section">
      <div className="cards-grid">
        <div className="content-left">
          <h2>SUCCESS <pre></pre> STORIES</h2>
          <p>
            Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {cards.map((item, idx) => (
          <div className="success-card" key={idx}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
