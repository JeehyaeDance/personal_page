import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./work.module.css"
import climbingDemo from "../gifs/climbing-day-demo.gif"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className={styles.workPage}>
      <div className={styles.work}>
        <img
          className={styles.demo}
          src={climbingDemo}
          alt="climbing day demo"
        />
        <div className={styles.workSpec}>
          <h3>Climbing Day</h3>
          <p>
            Climbing Day is a web application. It is a rock climbing journal
            that allows users to log their rock climbing activity and track the
            improvement with weekly analytics. The backend server can handle and
            route data to both the web application and mobile application.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Work
