import React from "react"
import { Link } from "gatsby"
import styles from "./navBtn.module.css"

const navBtn = props => (
  <div>
    <Link
      to={props.btnName === "About" ? "/" : `/${props.btnName.toLowerCase()}/`}
      className={styles.navbar}
      activeStyle={{ borderBottom: `2px solid #0B90F0` }}
    >
      {props.btnName}
    </Link>
  </div>
)

export default navBtn
