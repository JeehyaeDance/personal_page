import React from "react"
import { Link } from "gatsby"

const navBtn = props => (
  <div>
    <Link
      to={props.btnName === "About" ? "/" : `/${props.btnName.toLowerCase()}/`}
      style={{
        textDecoration: `none`,
        color: `#7EC1F2`,
        padding: `0 10px `,
        margin: `0 10px`,
        font: `24px bold Muli`,
      }}
      activeStyle={{ borderBottom: `2px solid #0B90F0` }}
    >
      {props.btnName}
    </Link>
  </div>
)

export default navBtn
