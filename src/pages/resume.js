import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeImg from "../components/resumeImg"
import Pdf from "../documents/Jeehyae-resume.pdf"
import styles from "./resume.module.css"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={styles.resumePage}>
      <h4>
        Click here to download pdf file{" "}
        <span role="img" aria-label="pointing">
          👉🏻
        </span>{" "}
        <a href={Pdf} className={styles.resumeLink}>
          RESUME
        </a>
      </h4>
      <ResumeImg />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
