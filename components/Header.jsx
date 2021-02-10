import React from "react"

import AvariceLogo from "../assets/AvariceLogo"

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-side">
        <AvariceLogo className="header__logo" />
        <h1 className="header__logotype">avarice</h1>
      </div>

      <div className="header__right-side">
        <div className="header__search-bar">
          <input type="text" className="header__search-bar-input" placeholder="search..." />
          {/* TO DO - add a search icon here */}
        </div>
        <div className="header__notifications">
          <img className="header__notifications-icon" src="assets/svg/chat.svg" />
          <span className="header__notifications-alert">4</span>
        </div>
        <div className="header__profile">
          <img src="/img/temp-user.jpg" alt="user profile photo" className="header__profile-icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
