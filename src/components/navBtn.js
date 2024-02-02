import React from "react"
import { Link } from "gatsby"
import { navbar } from "./css/navBtn.module.css"

const navBtn = props => (
  <div>
    <Link
      to={props.btnName === "About" ? "/" : `/${props.btnName.toLowerCase()}/`}
      className={navbar}
      activeStyle={{ borderBottom: `2px solid #ffaaa5` }}
    >
      {props.btnName}
    </Link>
  </div>
)

export default navBtn
