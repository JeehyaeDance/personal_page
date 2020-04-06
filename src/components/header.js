import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBtn from "./navBtn"

const Header = ({ siteTitle }) => (
  <header style={{ height: `120px`, display: `flex` }}>
    <div
      style={{
        margin: `0 0 0 100px`,
        padding: `1.45rem 0 0 0`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `#7EC1F2`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        display: `flex`,
        alignItems: `flex-end`,
        justifyContent: `flex-end`,
        width: `calc(100% - 400px)`,
        padding: `10px 0`,
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
