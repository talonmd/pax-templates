import React from "react"

const Footer = () => {
  return (
    <footer class="footer">
      <nav class="footer__ter-navigation">
        <ul class="ter-navigation__list">
          <li class="ter-navigation__item">
            <a href="#" class="ter-navigation__link">
              About Us
            </a>
          </li>
          <li class="ter-navigation__item">
            <a href="#" class="ter-navigation__link ter-navigation__link--middle">
              Terms
            </a>
          </li>
          <li class="ter-navigation__item">
            <a href="#" class="ter-navigation__link">
              Privacy
            </a>
          </li>
        </ul>
      </nav>
      <p class="footer__text">&copy; 2020 by Pax. All rights reservered.</p>
    </footer>
  )
}

export default Footer
