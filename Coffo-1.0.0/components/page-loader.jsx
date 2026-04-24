"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LOAD_DELAY_MS = 2400;

export default function PageLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, LOAD_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname, loading]);

  return (
    <>
      <div className={`page-loader${loading ? " is-visible" : ""}`} aria-hidden={!loading}>
        <div className="page-loader__backdrop" aria-hidden="true">
          <span className="page-loader__ray page-loader__ray--left" />
          <span className="page-loader__ray page-loader__ray--right" />
          <span className="page-loader__trail page-loader__trail--one" />
          <span className="page-loader__trail page-loader__trail--two" />
          <span className="page-loader__trail page-loader__trail--three" />
          <span className="page-loader__particle page-loader__particle--1" />
          <span className="page-loader__particle page-loader__particle--2" />
          <span className="page-loader__particle page-loader__particle--3" />
          <span className="page-loader__particle page-loader__particle--4" />
          <span className="page-loader__particle page-loader__particle--5" />
          <span className="page-loader__particle page-loader__particle--6" />
        </div>
        <div className="page-loader__splash">
          <div className="page-loader__halo" aria-hidden="true" />
          <div className="page-loader__ring page-loader__ring--outer" aria-hidden="true" />
          <div className="page-loader__ring page-loader__ring--inner" aria-hidden="true" />
          <div className="page-loader__mark" aria-label="Sajo Trading PLC">
            <img src="/images/sajo-logo.png" alt="Sajo Trading PLC logo" />
          </div>
          <div className="page-loader__content">
            <strong>Sajo Trading PLC</strong>
            <span>Coffee Export & Elevator Supply</span>
            <p>Harvested with Care, Washed with Precision, Delivered with Excellence</p>
          </div>
        </div>
        <div className="page-loader__bar">
          <span className="page-loader__bar-fill" />
        </div>
      </div>
      <div className={`page-shell${loading ? " is-loading" : ""}`}>{children}</div>
    </>
  );
}
