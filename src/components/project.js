import React from "react"
import {
  work,
  demo,
  workSpec,
  workTitle,
  linkGroup,
  link,
  appIntro,
  logoGroup,
} from "./css/project.module.css"

const Project = props => (
  <div className={work}>
    <img
      className={demo}
      src={props.project.demoImg}
      alt={props.project.demoAlt}
    />
    <div className={workSpec}>
      <h3 className={workTitle}>{props.project.projectName}</h3>
      <div className={linkGroup}>
        <a className={link} href={props.project.githubLink}>
          Github
        </a>
        <a className={link} href={props.project.appLink}>
          {props.project.appLinkForPage}
        </a>
      </div>
      <p className={appIntro}>{props.project.appIntro}</p>
      <div className={logoGroup}>
        {props.project.stackLogos.map(logo => {
          return logo
        })}
      </div>
    </div>
  </div>
)

export default Project
