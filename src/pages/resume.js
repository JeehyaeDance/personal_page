import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hi from the resume page</h1>
    <p>Welcome to my resume</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
