"use client";

import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    title: "Unleash Your Potential with Premium Quality Solutions",
    text: "Transform Your World with Cutting-Edge Innovation and Unmatched Excellence. Discover high-end products crafted for perfection, blending style, durability, and sustainability.",
    image: "/images/hero-coffee-cherries.jpg",
    alt: "Premium coffee products",
    label: "Quality First",
    intro: "Elevate your lifestyle with our best-in-class offerings that deliver superior performance and timeless appeal.",
    points: ["Award-Winning Quality", "Satisfaction Guaranteed", "20% Off First Purchase"],
    cta: "Shop Now and Experience the Difference",
    offer: "Limited-Time: 20% Off Your First Purchase!",
  },
  {
    title: "From Farm To Global Market",
    text: "We work closely with growers and processors to move Ethiopian coffee from origin to buyers with traceability and quality control.",
    image: "/images/hero-coffee-cherries.jpg",
    alt: "Coffee harvesting in Ethiopia",
    label: "Supply Chain Focus",
    intro: "A disciplined export partner connecting producers, processors, and global markets.",
    points: ["Farmer relationships", "Quality control", "Reliable logistics"],
    cta: "Explore Our Coffee",
    offer: "",
  },
  {
    title: "Clean Cup, Reliable Supply",
    text: "Our team focuses on dependable export volumes, well-prepared lots, and a flavor profile that reflects Ethiopia's best coffee regions.",
    image: "/images/hero-coffee-cherries.jpg",
    alt: "Coffee washing process",
    label: "Quality First",
    intro: "Built for buyers who need dependable coffee, strong presentation, and professional communication.",
    points: ["Lot preparation", "Cup consistency", "Responsive service"],
    cta: "Partner With Us",
    offer: "",
  },
];

export default function HomeBanner() {
  const [index, setIndex] = useState(0);
  const currentSlide = slides[index];

  const previous = () => {
    setIndex((value) => (value === 0 ? slides.length - 1 : value - 1));
  };

  const next = () => {
    setIndex((value) => (value === slides.length - 1 ? 0 : value + 1));
  };

  return (
    <div className="banner_section">
      <div className="container">
        <div id="banner_slider" className="banner_slider">
          <div className="banner_layout">
            <div className="banner_taital_main">
              <span className="banner_kicker">{currentSlide.label}</span>
              <p className="banner_intro">Sajo Trading PLC</p>
              <h1 className="banner_taital">{currentSlide.title}</h1>
              <p className="banner_text">{currentSlide.text}</p>
              <div className="banner_points" aria-label="Key strengths">
                {currentSlide.points.map((point) => (
                  <span key={point} className="banner_point">
                    {point}
                  </span>
                ))}
              </div>
              
              {currentSlide.offer && (
                <div className="banner_offer">
                  <span className="offer_badge">{currentSlide.offer}</span>
                </div>
              )}
              
              <div className="btn_main">
                <div className="about_bt active cta-button">
                  <Link href="/contact">{currentSlide.cta || "Get Started"}</Link>
                </div>
                <div className="callnow_bt">
                  <Link href="/about">Learn More</Link>
                </div>
              </div>
              <p className="banner_note">{currentSlide.intro}</p>
            </div>
            <div className="banner_media">
              <button className="banner_nav banner_nav_prev" type="button" onClick={previous}>
                <i className="fa fa-arrow-left"></i>
              </button>
              <div className="banner_img">
                <img src={currentSlide.image} alt={currentSlide.alt} />
              </div>
              <button className="banner_nav banner_nav_next" type="button" onClick={next}>
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
