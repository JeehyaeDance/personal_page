import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { resumeImg, resumeLink, resumePage } from "./css/resume.module.css"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={resumePage}>
      <h4>
        한국어 Resume 다운로드{" "}
        <span role="img" aria-label="pointing">
          👉🏻
        </span>{" "}
        <a href="이지혜_Resume.pdf" download className={resumeLink}>
          HERE
        </a>
      </h4>
      <div className={resumeImg}></div>
    </div>
  </Layout>
)

export default Resume
