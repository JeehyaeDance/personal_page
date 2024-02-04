import React from "react"
import {
  pageWrapper,
  iconGroup,
  snsTag,
  aboutMeContainer,
  aboutMe,
  nameGroup,
  name,
  title,
  contactInfo,
  introContainer,
  contact,
  sectionTitle,
} from "./css/index.module.css"

import Layout from "../components/layout"
import ProfileImg from "../components/profileImg"
import SEO from "../components/seo"
import GithubIcon from "../components/icons/Github"
import LinkedinIcon from "../components/icons/LinkedIn"
import InstaIcon from "../components/icons/Insta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={pageWrapper}>
      <div className={introContainer}>
        <div className={nameGroup}>
          <h1 className={name}>이지혜 (Jeehyae)</h1>
          <h2 className={title}>사람을 향하는 기술을 지향하는 개발자</h2>
        </div>
        <div className={contactInfo}>
          <div className={iconGroup}>
            <a className={snsTag} href="https://github.com/JeehyaeDance">
              <GithubIcon />
            </a>
            <a
              className={snsTag}
              href="https://www.linkedin.com/in/jeehyaeDance/"
            >
              <LinkedinIcon />
            </a>
            <a
              className={snsTag}
              href="https://www.instagram.com/jinajelly1004/"
            >
              <InstaIcon />
            </a>
          </div>
          <div className={contact}>
            <span>Email: jeehyae91@gmail.com</span>
          </div>
        </div>
      </div>

      <h3 className={sectionTitle}>About Me</h3>
      <div className={aboutMeContainer}>
        <ProfileImg />
        <p className={aboutMe}>
          작은 규모의 팀에서 단독 개발자로 웹 앱을 기획/개발/배포하고
          유저들로부터 긍정적인 피드백을 받은 경험이 있습니다. 또한 e-commerce의
          제품 서치 페이지, 제품 디테일, 계정관리 페이지 구축을 담당하였습니다.
          React 앱 컴포넌트에 Typescript를 적용하는 작업을 10명의 개발자들과 한
          팀으로 진행하였습니다. 다양한 직무의 팀 구성원들과 유연한
          커뮤니케이션을 하며 업무합니다. 고객/서비스 중심적인 마인드로 웹
          접근성을 고려한 서비스를 구축하는 데 열정이 있습니다. 프론트 엔드 개발
          분야의 개발 지식과 유저를 이해하는 역량을 쌓고자 노력해 왔습니다.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
