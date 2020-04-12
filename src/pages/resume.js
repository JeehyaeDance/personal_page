import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeImg from "../components/resumeImg"
import Pdf from "../documents/Jeehyae-resume.pdf"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div style={{ margin: `1.45rem 100px` }}>
      <h4>
        Click here to download pdf file{" "}
        <span role="img" aria-label="pointing">
          👉🏻
        </span>{" "}
        <a href={Pdf} style={{ textDecoration: `none`, color: `#7EC1F2` }}>
          RESUME
        </a>
      </h4>
      <ResumeImg />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
