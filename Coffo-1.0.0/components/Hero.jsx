"use client";

import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    title: "Premium Ethiopian Coffee for Global Markets",
    text: "We work closely with growers and processors to move Ethiopian coffee from origin to buyers with traceability and quality control.",
    image: "/images/hero-coffee-cherries.jpg",
    alt: "Premium coffee products",
    label: "Premium Export",
    intro: "A disciplined export partner connecting producers, processors, and global markets.",
    points: ["Direct Sourcing", "Quality Control", "Reliable Logistics"],
  },
  {
    title: "From Farm To Global Market",
    text: "We work closely with growers and processors to move Ethiopian coffee from origin to buyers with traceability and quality control.",
    image: "/images/hero-coffee-cherries.jpg",
    alt: "Coffee harvesting in Ethiopia",
    label: "Supply Chain Focus",
    intro: "A disciplined export partner connecting producers, processors, and global markets.",
    points: ["Farmer Relationships", "Quality Control", "Reliable Logistics"],
  },
  {
    title: "Clean Cup, Reliable Supply",
    text: "Our team focuses on dependable export volumes, well-prepared lots, and a flavor profile that reflects Ethiopia's best coffee regions.",
    image: "/images/hero-coffee-cherries.jpg",
    alt: "Coffee washing process",
    label: "Quality First",
    intro: "Built for buyers who need dependable coffee, strong presentation, and professional communication.",
    points: ["Lot Preparation", "Cup Consistency", "Responsive Service"],
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const currentSlide = slides[index];

  const previous = () => {
    setIndex((value) => (value === 0 ? slides.length - 1 : value - 1));
  };

  const next = () => {
    setIndex((value) => (value === slides.length - 1 ? 0 : value + 1));
  };

  return (
    <div className="hero_section">
      <div className="container">
        <div id="hero_slider" className="hero_slider">
          <div className="hero_layout">
            <div className="hero_content">
              <span className="hero_kicker">{currentSlide.label}</span>
              <p className="hero_intro">Sajo Trading PLC</p>
              <h1 className="hero_title">{currentSlide.title}</h1>
              <p className="hero_text">{currentSlide.text}</p>
              <div className="hero_points" aria-label="Key strengths">
                {currentSlide.points.map((point) => (
                  <span key={point} className="hero_point">
                    {point}
                  </span>
                ))}
              </div>
              <div className="btn_main">
                <div className="about_bt active cta-button">
                  <Link href="/contact">Request Pricing</Link>
                </div>
                <div className="callnow_bt">
                  <Link href="/coffees">Explore Coffee</Link>
                </div>
              </div>
              <p className="hero_note">{currentSlide.intro}</p>
            </div>
            <div className="hero_media">
              <button className="hero_nav hero_nav_prev" type="button" onClick={previous}>
                <i className="fa fa-arrow-left"></i>
              </button>
              <div className="hero_img">
                <img src={currentSlide.image} alt={currentSlide.alt} />
              </div>
              <button className="hero_nav hero_nav_next" type="button" onClick={next}>
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
