import Link from "next/link";
import { company } from "@/components/site-content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <div className="footer-brand">
            <span className="footer-brand__logo" aria-hidden="true">
              <img src="/images/sajo-logo.png" alt="" />
            </span>
            <div>
              <strong>{company.name}</strong>
              <p>
                Premium Ethiopian Arabica exports and dependable elevator supply
                solutions for a growing market.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/shop">Products</Link></li>
            <li><Link href="/coffees">Process</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li><a href={company.emailHref}>{company.email}</a></li>
            <li><a href={company.phoneHref}>{company.phone}</a></li>
            <li><span>{company.address}</span></li>
          </ul>
        </div>
        <div>
          <h3>Global Trade</h3>
          <ul className="footer-list">
            <li><span>Arabica coffee export</span></li>
            <li><span>Elevator sourcing support</span></li>
            <li><span>Buyer-focused partnerships</span></li>
          </ul>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <div className="footer-inline-links">
          <Link href="/blog">Updates</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
