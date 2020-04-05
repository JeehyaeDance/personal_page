import React from "react"
import { Link } from "gatsby"

const navBtn = props => (
  <div style={{ width: `60px`, height: `30px` }}>
    <Link
      to={props.btnName === "About" ? "/" : props.btnName}
      style={{ textDecoration: `none`, color: `#7EC1F2` }}
    >
      {props.btnName}
    </Link>
  </div>
)

export default navBtn
