import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBtn from "./navBtn"
import { header, headerTitle, headerNavbar } from "./css/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <h1 className={headerTitle}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          color: `#606060`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <div className={headerNavbar}>
      <NavBtn btnName="About" />
      <NavBtn btnName="Resume" />
      <NavBtn btnName="Work" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
