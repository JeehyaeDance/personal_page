import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeImg from "../components/resumeImg"
import Pdf from "../documents/Jeehyae Resume.pdf"
import { resumeImg, resumeLink, resumePage } from "./css/resume.module.css"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={resumePage}>
      <h4>
        Click here to download pdf file{" "}
        <span role="img" aria-label="pointing">
          👉🏻
        </span>{" "}
        <a href={Pdf} className={resumeLink}>
          RESUME
        </a>
      </h4>
      <div className={resumeImg}>
        <ResumeImg />
      </div>
    </div>
  </Layout>
)

export default Resume
