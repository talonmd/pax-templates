import React from "react"
import Link from "next/link"

import AvariceLogo from "../assets/AvariceLogo"

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <div className="header__left-side">
          <AvariceLogo className="header__logo" />
          <h1 className="header__logotype">avarice</h1>
        </div>
      </Link>
      <div className="header__right-side">
        <div className="header__search-bar">
          <input type="text" className="header__search-bar-input" placeholder="search..." />
          {/* TO DO - add a search icon here */}
        </div>
        <Link href="/profile/123">
          <a>
            <div className="header__notifications">
              <img className="header__notifications-icon" src="/assets/svg/chat.svg" />
              <span className="header__notifications-alert">4</span>
            </div>
          </a>
        </Link>
        <Link href="/profile/123">
          <a>
            <div className="header__profile">
              <img
                src="/img/temp-user.jpg"
                alt="user profile photo"
                className="header__profile-icon"
              />
            </div>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
