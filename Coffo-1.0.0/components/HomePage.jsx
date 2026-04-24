"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  coffeeCatalog,
  coffeeProcess,
  company,
  coreValues,
  divisions,
  elevatorCatalog,
  heroMetrics,
  newsItems,
  testimonials,
  whyChooseUs,
} from "@/components/site-content";

const galleryItems = [
  {
    image: "/images/JaCqJ-nkYbrZ4vrcDiYjozvcJus5h8t_4sA1zD2VUVfFrpjHp4GoX9rGL7a3wpj3wJXcJ352ur1XwXUCKG0OGwjF4ssL5iixbGA38WS36-RAvUedz6QqdKeMZyaz7Z2wzTynW8eboCbl871b3w7_9LWptxWdwhyU_1VlKttiIR9Ue1r6oGofWUhXTzphjA54.jpg",
    title: "Coffee landscapes",
    detail: "Premium origin environments that shape quality from the ground up.",
  },
  {
    image: "/images/ba274daf-1d58-42ca-96ca-5896c7a6b2c3.png",
    title: "Farmer partnerships",
    detail: "Long-term relationships that support quality and continuity.",
  },
  {
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    title: "Coffee culture",
    detail: "An authentic coffee identity that connects heritage with export value.",
  },
  {
    image: "/images/ed28c9ec-4f7f-4bd9-addf-265c7c3302e6.png",
    title: "Precision processing",
    detail: "Handled carefully for clean cup quality and export readiness.",
  },
  {
    image: "/images/a1b47317-3156-464f-922d-2e31325bbde4.png",
    title: "Drying and sorting",
    detail: "Controlled preparation for consistency and flavor.",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="home-page">
      <section className="hero-panel">
        <div className="section-shell hero-grid">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Sajo Trading PLC</span>
            <h1>Harvested with Care, Washed with Precision, Delivered with Excellence</h1>
            <p className="hero-lead">
              {company.name} is a diversified Ethiopian company exporting premium Arabica
              coffee and supplying high-quality elevator solutions.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Contact Us
              </Link>
              <Link href="/shop" className="button button-secondary">
                Explore Our Products
              </Link>
            </div>
            <div className="trust-row">
              <span>Coffee Export</span>
              <span>Elevator Import & Supply</span>
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="hero-orb" />
            <div className="hero-image-card">
              <img
                src="/images/hero-coffee-cherries.jpg"
                alt="Coffee farm landscape"
              />
            </div>
          </div>
        </div>
        <div className="section-shell stats-grid" data-reveal>
          {heroMetrics.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="section-shell section-block">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Business Divisions</span>
          <h2>Serving both global coffee buyers and local construction clients.</h2>
          <p>
            Sajo Trading PLC combines Ethiopia&apos;s coffee heritage with dependable
            infrastructure sourcing, creating a broader platform for long-term business.
          </p>
        </div>
        <div className="product-grid">
          {[...coffeeCatalog.slice(0, 2), ...elevatorCatalog.slice(0, 2)].map((item) => (
            <article key={item.title} className="product-card" data-reveal>
              <div className="product-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link href="/shop" className="text-link">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-block story-panel">
        <div className="story-grid">
          <div className="story-media" data-reveal>
            <img src="/images/ba274daf-1d58-42ca-96ca-5896c7a6b2c3.png" alt="Coffee farmers processing beans" />
          </div>
          <div className="story-copy" data-reveal>
            <span className="eyebrow">About Us</span>
            <h2>A diversified Ethiopian company rooted in excellence.</h2>
            <p>
              Sajo Trading PLC is a diversified Ethiopian company rooted in excellence.
              We are a premier exporter of Ethiopia&apos;s finest Arabica coffee, bringing
              the country&apos;s rich coffee heritage to global markets.
            </p>
            <p>
              Alongside agriculture, we support Ethiopia&apos;s infrastructure sector by
              importing high-quality elevators for residential, commercial, and industrial
              use. We are committed to quality, sustainability, and long-term partnerships,
              bridging tradition and innovation.
            </p>
            <div className="story-stats">
              {divisions.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
              <div>
                <strong>{company.philosophy}</strong>
                <span>We believe coffee is more than a product; it is heritage, livelihood, and culture.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-shell section-block">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Our Coffee Process</span>
          <h2>Handled with care from cultivation to export.</h2>
        </div>
        <div className="logistics-grid">
          {coffeeProcess.slice(0, 3).map((item, index) => (
            <div key={item.title} className="info-card" data-reveal>
              <div className="info-icon">{`0${index + 1}`}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Visual Portfolio</span>
          <h2>Coffee origin, processing, and modern industrial capability.</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure
              key={item.title}
              className={`gallery-card gallery-card-${(index % 3) + 1}`}
              data-reveal
            >
              <img src={item.image} alt={item.title} />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-shell section-block testimonials-panel">
        <div className="section-heading centered" data-reveal>
          <span className="eyebrow">Testimonials</span>
          <h2>Trust built through dependable execution.</h2>
        </div>
        <div className="testimonial-stage" data-reveal>
          <div className="testimonial-stars" aria-hidden="true">
            <span>★★★★★</span>
          </div>
          <blockquote>{currentTestimonial.quote}</blockquote>
          <div className="testimonial-person">
            <div className="avatar-badge">{currentTestimonial.name.charAt(0)}</div>
            <div>
              <strong>{currentTestimonial.name}</strong>
              <span>{currentTestimonial.role}</span>
            </div>
          </div>
          <div className="testimonial-dots" aria-label="Testimonial selector">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === activeTestimonial ? "is-active" : ""}
                onClick={() => setActiveTestimonial(index)}
              >
                <span className="sr-only">{`Show testimonial ${index + 1}`}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Why Choose Us</span>
          <h2>Clear advantages for buyers, developers, and partners.</h2>
        </div>
        <div className="why-grid">
          {[...whyChooseUs, ...coreValues.slice(0, 1).map((item) => item.title)].map((item) => (
            <article key={item} className="why-card" data-reveal>
              <div className="why-accent" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="cta-banner" data-reveal>
          <div>
            <span className="eyebrow">Global Reach</span>
            <h2>We export premium Ethiopian Arabica coffee worldwide.</h2>
            <p>
              Sajo Trading PLC connects local farmers to international markets while also
              serving local infrastructure projects with reliable elevator sourcing.
            </p>
          </div>
          <Link href="/contact" className="button button-primary">
            Start An Inquiry
          </Link>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Updates</span>
          <h2>Current themes across trade and infrastructure.</h2>
        </div>
        <div className="logistics-grid">
          {newsItems.map((item, index) => (
            <div key={item.title} className="info-card" data-reveal>
              <div className="info-icon">{`0${index + 1}`}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
