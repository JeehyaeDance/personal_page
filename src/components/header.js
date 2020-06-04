import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBtn from "./navBtn"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.headerTitle}>
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
    <div className={styles.headerNavbar}>
      <NavBtn btnName="About" />
      <NavBtn btnName="Resume" />
      <NavBtn btnName="Work" />
      <NavBtn btnName="Blog" />
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
