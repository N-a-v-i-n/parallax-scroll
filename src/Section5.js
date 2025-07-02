import React from "react";
import "./components/css/section5.css";

const insights = [
  {
    title: "Successful MVP Launches That Changed the Game.",
    description:
      "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.",
    image: "/assets/mvp1.png",
    link: "#",
  },
  {
    title: "How Our AI Product Development Company is Pioneering Innovation?",
    description:
      "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future. Click to explore our journey and join us in revolutionizing industries.",
    image: "/assets/ai1.png",
    link: "#",
  },
  {
    title: "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
    description:
      "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!",
    image: "/assets/ecommerce.png",
    link: "#",
  },
];

export default function SectionInsights() {
  return (
    <section className="section insights-section">
      <div className="insights-header">
        <h2>FEATURED INSIGHTS</h2>
        <p>Were you looking to explore a specific topic? You’re in the right spot.</p>
      </div>
      <div className="insights-grid">
        {insights.map((item, idx) => (
          <div className="insight-card" key={idx}>
            <img src={item.image} alt={item.title} className="insight-image" />
            <div className="insight-content">
              <div style={{position: 'relative'}}>
                <h4>{item.title}</h4>
                <a href={item.link} className="read-more">
                  <i className="bx bx-arrow-back bx-rotate-180" />
                </a>
              </div>
              <p>{item.description}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
