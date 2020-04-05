import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GithubIcon from "../components/icons/Github"
import LinkedinIcon from "../components/icons/LinkedIn"
import InstaIcon from "../components/icons/Insta"
import TwitterIcon from "../components/icons/Twitter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <div
        style={{
          display: `flex`,
          justifyContent: `space-evenly`,
          marginTop: `10px`,
        }}
      >
        <a href="https://github.com/JeehyaeDance">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/jeehyaeDance/">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/jinajelly1004/">
          <InstaIcon />
        </a>
        <a href="https://twitter.com/jinajeehye">
          <TwitterIcon />
        </a>
      </div>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
