import React from "react"
import styles from "./index.module.css"

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
    <div className={styles.aboutPage}>
      <div className={styles.leftPage}>
        <ProfileImg />
        <div className={styles.iconGroup}>
          <a className={styles.snsTag} href="https://github.com/JeehyaeDance">
            <GithubIcon /> github
          </a>
          <a
            className={styles.snsTag}
            href="https://www.linkedin.com/in/jeehyaeDance/"
          >
            <LinkedinIcon /> linkedin
          </a>
          <a
            className={styles.snsTag}
            href="https://www.instagram.com/jinajelly1004/"
          >
            <InstaIcon /> instagram
          </a>
          <a className={styles.snsTag} href="https://twitter.com/jinajeehye">
            <TwitterIcon /> twitter
          </a>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <h2>안녕하세요! Hi, I'm Jeehyae!</h2>
        <p>
          I am a full-stack software engineer who wants to develop innovative
          technology and I am passionate about improving human expriences. Up
          until now, I have been working in industries like hospitality and
          education where I can help make an impact on other people’s lives. As
          I was exposed to the software engineering field, I realized how my
          passion to make an impact can be explored even further.{" "}
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
