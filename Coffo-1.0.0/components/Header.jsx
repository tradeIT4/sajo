"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/components/site-content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/coffees", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Products" },
  { href: "/blog", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || pathname !== "/" ? " is-solid" : ""}`}>
      <div className="section-shell">
        <nav className="site-nav" aria-label="Primary">
          <Link className="brand-mark" href="/">
            <span className="brand-mark__badge brand-mark__badge--image" aria-hidden="true">
              <img src="/images/sajo-logo.png" alt="" />
            </span>
            <span className="brand-mark__text">
              <strong>{company.name}</strong>
              <small>Coffee Export & Elevator Supply</small>
            </span>
          </Link>
          <button
            className={`nav-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
          <div className={`nav-panel${open ? " is-open" : ""}`} id="primary-navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className={isActive(pathname, item.href) ? "is-active" : ""} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
