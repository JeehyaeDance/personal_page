import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProfileImg from "../components/profileImg"
import SEO from "../components/seo"
import GithubIcon from "../components/icons/Github"
import LinkedinIcon from "../components/icons/LinkedIn"
import InstaIcon from "../components/icons/Insta"
import TwitterIcon from "../components/icons/Twitter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: `flex`,
        margin: `1.45rem 100px`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <div style={{ width: `200px` }}>
        <ProfileImg />
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
      <div
        style={{
          width: `800px`,
          height: `400px`,
          padding: `35px`,
          border: `1px solid #0B90F0`,
        }}
      >
        <h2>
          안녕하세요 <span>👋🏼</span>
        </h2>
        <p>
          My name is Jeehyae Dance. I am a full-stack software engineer who
          wants to develop innovative technology and I am passionate about
          improving human expriences. Up until now, I have been working in
          industries like hospitality and education where I can help make an
          impact on other people’s lives. As I was exposed to the software
          engineering field, I realized how my passion to make an impact can be
          explored even further.{" "}
        </p>
        <p>
          On a personal note, I currently live in Seattle with my wonderful
          husband Keevan (who gave me the idea to start persuing programming)
          and our beautiful dog Samba. When I am not coding, I like to workout
          through crossfit, running, and rock climbing, I love cooking (mostly
          Korean food), and I enjoy watching Korean TV shows.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
