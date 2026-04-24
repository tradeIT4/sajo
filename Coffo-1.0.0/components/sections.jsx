"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  coffeeCatalog,
  coffeeProcess,
  company,
  coreValues,
  elevatorCatalog,
  missionPoints,
  newsItems,
  whyChooseUs,
} from "@/components/site-content";

function PageIntro({ title, subtitle, text, actions }) {
  return (
    <section className="inner-hero">
      <div className="section-shell inner-hero__grid">
        <div data-reveal>
          <span className="eyebrow">{subtitle}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
        <div className="inner-hero__panel" data-reveal>
          <span>{company.philosophy}</span>
          <strong>Premium coffee export and dependable elevator sourcing from Addis Ababa.</strong>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <>
      <PageIntro
        title="About Sajo Trading PLC"
        subtitle="About Us"
        text="Sajo Trading PLC is a diversified Ethiopian company rooted in excellence, bridging Ethiopia's coffee heritage with modern infrastructure supply."
        actions={
          <Link href="/contact" className="button button-primary">
            Contact Us
          </Link>
        }
      />
      <section className="section-shell section-block story-panel">
        <div className="story-grid">
          <div className="story-media" data-reveal>
            <img src="/images/ba274daf-1d58-42ca-96ca-5896c7a6b2c3.png" alt="Coffee farmers processing beans" />
          </div>
          <div className="story-copy" data-reveal>
            <span className="eyebrow">Mission, Vision, Values</span>
            <h2>Recognized globally for coffee, trusted locally for infrastructure.</h2>
            <p>
              To be a leading Ethiopian enterprise recognized globally for premium coffee
              exports and trusted locally for delivering modern, high-quality
              infrastructure solutions that uplift communities and enhance lifestyles.
            </p>
            <div className="story-stats">
              <div>
                <strong>Mission</strong>
                <span>{missionPoints[0]}</span>
              </div>
              <div>
                <strong>Mission</strong>
                <span>{missionPoints[1]}</span>
              </div>
              <div>
                <strong>Mission</strong>
                <span>{missionPoints[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell section-block">
        <div className="why-grid">
          {coreValues.map((item) => (
            <article key={item.title} className="why-card" data-reveal>
              <div className="why-accent" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function CoffeeSection() {
  return (
    <>
      <PageIntro
        title="Our Coffee Process"
        subtitle="Process Overview"
        text="Cultivation, harvesting, processing, drying, sorting, and export assurance are handled with disciplined workflow."
      />
      <section className="section-shell section-block">
        <div className="product-grid">
          {coffeeProcess.slice(0, 4).map((item) => (
            <article key={item.title} className="product-card" data-reveal>
              <div className="product-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span>Coffee Process</span>
                  <span>Ethiopia</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="/contact" className="text-link">
                  Contact Us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ProductSection() {
  return (
    <>
      <PageIntro
        title="Our Products"
        subtitle="Coffee And Elevators"
        text="Prepared with the same premium positioning in a simpler catalog layout."
      />
      <section className="section-shell section-block">
        <div className="product-grid">
          {[...coffeeCatalog, ...elevatorCatalog].slice(0, 4).map((item) => (
            <article key={item.title} className="product-card" data-reveal>
              <div className="product-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span>{item.tag}</span>
                  <span>Sajo Trading PLC</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link href="/contact" className="text-link">
                  Request Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-shell section-block">
        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <article key={item} className="why-card" data-reveal>
              <div className="why-accent" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function BlogSection() {
  return (
    <>
      <PageIntro
        title="Insights & Updates"
        subtitle="Partnerships"
        text="Professional relationships built around coffee quality, infrastructure reliability, and long-term cooperation."
      />
      <section className="section-shell section-block">
        <div className="gallery-grid gallery-grid--compact">
          {newsItems.slice(0, 2).map((item, index) => (
            <figure
              key={item.title}
              className={`gallery-card gallery-card-${(index % 2) + 1}`}
              data-reveal
            >
              <img
                src={
                  index === 0
                    ? "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
                    : "/images/RxiijEJZgUbMG0Zov1CrOj-evygycb3hwH-Ctr52z2P_6qtNousOvSFx0FuD58iXkjEgPta7G5bW1d4llqUwbp47Qgs74clivu801AIsEWM9Rwu1xE0NzE7QASSUG_u3748cy2XBkZL-gffVBU7WyE_MzZuzS4wirLdmAxVXUUYsNZl2qn5h8jkDfSoveZCp.jpg"
                }
                alt={item.title}
              />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
                <Link href="/contact" className="text-link">
                  Contact Us
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

export function ContactSection() {
  return (
    <>
      <PageIntro
        title="Contact Us"
        subtitle="Start The Conversation"
        text="Reach out to discuss premium Ethiopian coffee exports, elevator sourcing, or long-term partnership opportunities."
      />
      <section className="section-shell section-block contact-layout">
        <div className="contact-card" data-reveal>
          <span className="eyebrow">Contact Details</span>
          <h2>Talk to the team.</h2>
          <div className="contact-list">
            <a href={company.emailHref}>{company.email}</a>
            <a href={company.phoneHref}>{company.phone}</a>
            <span>{company.address}</span>
            <span>{company.city}</span>
          </div>
          <p className="contact-note">
            For coffee export inquiries or elevator supply requests, reach us directly by
            phone or email.
          </p>
        </div>
        <div className="contact-card" data-reveal>
          <span className="eyebrow">Business Focus</span>
          <h2>How we can help.</h2>
          <div className="contact-list">
            <span>Premium Ethiopian Arabica coffee export</span>
            <span>Elevator import and supply solutions</span>
            <span>Partnerships with global buyers and local developers</span>
            <span>Based in Kera, Addis Ababa, Ethiopia</span>
          </div>
          <p className="contact-note">
            We work with international coffee buyers, construction stakeholders, and
            long-term business partners who value quality, reliability, and clear
            communication.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
