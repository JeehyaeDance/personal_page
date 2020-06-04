import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBtn from "./navBtn"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: `15vh`,
      display: `flex`,
      flexWrap: "wrap",
    }}
  >
    <h1 style={{ margin: "2vw", width: "50vw", fontSize: "5vw" }}>
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
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-end`,
        width: `40vw`,
      }}
    >
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
