import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <ul className="footer__navigation-list">
          <li className="footer__navigation-item">
            <a href="#" className="footer__navigation-link">
              About Us
            </a>
          </li>
          <li className="footer__navigation-item">
            <a href="#" className="footer__navigation-link footer__navigation-link--middle">
              Terms
            </a>
          </li>
          <li className="footer__navigation-item">
            <a href="#" className="footer__navigation-link">
              Privacy
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__text">&copy; 2021 by Sodalite Games LLC. All rights reservered.</p>
    </footer>
  )
}

export default Footer
