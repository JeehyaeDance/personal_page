import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./work.module.css"
import projectList from "../documents/project-list"
import Project from "../components/project"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className={styles.workPage}>
      <div className={styles.workList}>
        {projectList.map((project, index) => {
          return <Project project={project} key={index} />
        })}
      </div>
    </div>
  </Layout>
)

export default Work
