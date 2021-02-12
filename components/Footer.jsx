import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <ul className="footer__navigation-list">
          <li className="footer__navigation-item">
            <Link href="/about">
              <a className="footer__navigation-link">About Us</a>
            </Link>
          </li>
          <li className="footer__navigation-item">
            <Link href="/terms-and-privacy">
              <a className="footer__navigation-link footer__navigation-link--middle">
                Terms &amp; Privacy
              </a>
            </Link>
          </li>
          <li className="footer__navigation-item">
            <Link href="/contact">
              <a className="footer__navigation-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="footer__text">
        &copy; 2021 by
        <a href="#" className="footer__navigation-link">
          Sodalite Games LLC.
        </a>
        All rights reservered.
      </p>
    </footer>
  )
}

export default Footer
