import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeImg from "../components/resumeImg"
import Pdf from "../documents/Jeehyae-resume.pdf"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hi from the resume page</h1>
    <a href={Pdf}>Resume</a>
    <div style={{ margin: `1.45rem 100px` }}>
      <ResumeImg />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
