import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeImg from "../components/resumeImg"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hi from the resume page</h1>
    <div style={{ margin: `1.45rem 100px` }}>
      <ResumeImg />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
