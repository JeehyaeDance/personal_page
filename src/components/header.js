import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBtn from "./navBtn"

const Header = ({ siteTitle }) => (
  <header style={{ height: `100px`, display: `flex` }}>
    <div
      style={{
        margin: `auto`,
      }}
    >
      <h1 style={{ margin: 0, width: `400px` }}>
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
    </div>
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-end`,
        width: `calc(100% - 500px)`,
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
