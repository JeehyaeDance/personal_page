import React from "react"
import styles from "./project.module.css"

const Project = props => (
  <div className={styles.work}>
    <img
      className={styles.demo}
      src={props.project.demoImg}
      alt={props.project.demoAlt}
    />
    <div className={styles.workSpec}>
      <h3 className={styles.workTitle}>{props.project.projectName}</h3>
      <div className={styles.linkGroup}>
        <a className={styles.link} href={props.project.githubLink}>
          Github
        </a>
        <a className={styles.link} href={props.project.appLink}>
          {props.project.appLinkForPage}
        </a>
      </div>
      <p className={styles.appIntro}>{props.project.appIntro}</p>
      <div className={styles.logoGroup}>
        {props.project.stackLogos.map(logo => {
          return logo
        })}
      </div>
    </div>
  </div>
)

export default Project
