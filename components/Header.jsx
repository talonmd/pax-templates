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
        <input type="text" className="header__search-bar-input" placeholder="search..." />
        {/* TO DO - add a search icon here */}
        <Link href="/profile/123">
          <button className="button button-black">
            My Dashboard
            <span className="header__notifications-alert">4</span>
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header
