// Section3.jsx
import React from "react";
import "./components/css/section4.css";

const categories = [
  {
    number: "01",
    title: "Web App Development",
    techs: [
      { name: "React", logo: "/app logs/react.png" },
      { name: "Node", logo: "/app logs/node.png" },
      { name: "Angular", logo: "/app logs/angular.png" },
      { name: "Vue", logo: "/app logs/vue.png" },
      { name: "ExpressJS", logo: "/app logs/express.png" },
      { name: "AdobeXD", logo: "/app logs/adobeXD.png" },
      { name: "Figma", logo: "/app logs/figma.png" },
      { name: "Whimsical", logo: "/app logs/whimsical.png" },
    ],
  },
  {
    number: "02",
    title: "Mobile App Development",
    techs: [
      { name: "Flutter", logo: "/app logs/flutter.png" },
      { name: "Kotlin", logo: "/app logs/kotlin.png" },
      { name: "Swift", logo: "/app logs/swift.png" },
      { name: "React Native", logo: "/app logs/react.png" },
      { name: "AdobeXD", logo: "/app logs/adobexd.png" },
      { name: "Figma", logo: "/app logs/figma.png" },
    ],
  },
  {
    number: "03",
    title: "E-commerce",
    techs: [
      { name: "Shopify" },
      { name: "WooCommerce" },
      { name: "Prestashop" },
    ],
  },
  {
    number: "04",
    title: "Analytics",
    techs: [
      { name: "Python", logo: "/app logs/python.png" },
      { name: "PowerBI", logo: "/app logs/powerbi.png" },
      { name: "Tableau", logo: "/app logs/tableau.png" },
      { name: "Amazon QuickSight" },
      { name: "Apache Spark", logo: "/app logs/apache.png" },
    ],
  },
  {
    number: "05",
    title: "Data & Cloud",
    techs: [
      { name: "Azure", logo: "/app logs/azure.png" },
      { name: "AWS", logo: "/app logs/aws.png" },
      { name: "Docker", logo: "/app logs/docker.png" },
      { name: "Kubernetes", logo: "/app logs/kubernetes.png" },
      { name: "Google Cloud", logo: "/app logs/cloud.png" },
      { name: "Ola Krutrim" },
    ],
  },
];


export default function Section3() {
  return (
    <section className="section tech-section">
      <div className="tech-container">
          <div className="tech-left">
            <img
              src="/assets/Innovative.png"
              alt="tech-visual"
              className="tech-visual"
            />
          </div>

          <div className="tech-right">
          {categories.map((cat, idx) => (
            <div className="tech-category" key={idx}>
              <div className="tech-number">{cat.number}</div>
              <div className="tech-name">
                <h4>{cat.title}</h4>
                <div className="tech-tags">
                  {cat.techs.map((tech, i) => (
                    <div className="tag" key={i}>
                      {tech.logo && (
                        <img src={tech.logo} alt={tech.name} className="tag-icon" />
                      )}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
}
