"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coffees", label: "Process" },
  { href: "/shop", label: "Coffee" },
  { href: "/blog", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <div className={`header_section${isHome ? "" : " header_bg"}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark sajo-navbar">
          <Link className="navbar-brand" href="/" onClick={() => setOpen(false)}>
            <img src="/images/logo-left.png" alt="Sajo Trading PLC logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${open ? " show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`nav-item${isActive(pathname, item.href) ? " active" : ""}`}
                >
                  <Link className="nav-link" href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <div className="login_bt">
                <ul>
                  <li>
                    <a href="#">
                      <span className="user_icon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </span>
                      Sajo Trading PLC
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Search">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
