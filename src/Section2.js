import React, { useRef, useEffect } from "react";
import "./components/css/section2.css";

const testimonials = [
  {
    quote:
      "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
    name: "BRANDON LAU",
    position: "CEO, KIRI Journey",
    rating: "5 / 5",
    project: "E-commerce Development",
    country: "Hong Kong",
    logo: "/company-logos/kiri.png",
  },
  {
    quote:
      "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
    name: "BRANDON LAU",
    position: "CEO, KIRI Journey",
    rating: "5 / 5",
    project: "E-commerce Development",
    country: "Hong Kong",
    logo: "/company-logos/kiri.png",
  },
  {
    quote:
      "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
    name: "MARC DOLLON",
    position: "CTO, MasterStudy",
    rating: "5 / 5",
    project: "SaaS-Based Cloud ERP",
    country: "United States",
    logo: "/company-logos/masterstudy.png",
  },
  {
    quote:
      "I'm thrilled with Chromezy’s work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
    name: "JEET OBERAI",
    position: "Entrepreneur, PayLoan",
    rating: "4.8 / 5",
    project: "Product Development",
    country: "Singapore",
    logo: "/company-logos/airflow.png",
  },
  {
    quote:
      "I'm thrilled with Chromezy’s work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
    name: "JEET OBERAI",
    position: "Entrepreneur, PayLoan",
    rating: "4.8 / 5",
    project: "Product Development",
    country: "Singapore",
    logo: "/company-logos/airflow.png",
  },
];

export default function Section2() {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scrollWrapper = scrollRef.current;
  
  //   if (scrollWrapper) {
  //     scrollWrapper.scrollTo({
  //       left: scrollWrapper.scrollWidth,
  //       behavior: "smooth",
  //     });
  //   }
  // }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="section section-testimonials">
      <div className="section-header2">
        <div>
          <h2>OUR HAPPY CLIENTS</h2>
          <p>Dummy ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="card-scroll-controls">
          <i
            className="bx bx-left-arrow-alt"
            onClick={() => {
              scrollLeft();
            }}
          ></i>
          <i
            className="bx bx-right-arrow-alt"
            onClick={() => {
              scrollRight();
            }}
          ></i>
        </div>
      </div>
      <div className="testimonial-scroll-wrapper" ref={scrollRef}>
        <div className="testimonial-cards">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <img className="quateimg" alt="quateimg" src="/assets/bi_quote.png" />
              <p className="quote">{item.quote}</p>
              <div className="author">
                <strong>{item.name}</strong>
                <div>({item.position})</div>
              </div>
              <hr />
              <div className="footer">
                <div className="details">
                  <p>Star Rating – {item.rating}</p>
                  <p>Project – {item.project}</p>
                  <p>Country – {item.country}</p>
                </div>
                <div className="client-logo">
                  <img src={item.logo} alt="logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
