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
  row,
  description,
  orgName,
  jobTitle,
  period,
  subTitle,
  sectionContainer,
  detail,
  project,
  education,
  resumeLink,
  resume,
  footer,
} from "./css/index.module.css"

import Layout from "../components/layout"
import ProfileImg from "../components/profileImg"
import SEO from "../components/seo"
import GithubIcon from "../components/icons/Github"
import LinkedinIcon from "../components/icons/LinkedIn"
import InstaIcon from "../components/icons/Insta"

const IndexPage = () => (
  <Layout>
    <SEO title="이지혜" />
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
          안녕하세요, 저는 서울에서 살고 있는 3년차 개발자입니다. 작은 규모의
          팀에서 단독 개발자로 웹 앱을 기획/개발/배포하고 유저들로부터 긍정적인
          피드백을 받은 경험이 있습니다. 또한 e-commerce의 제품 서치 페이지,
          제품 디테일, 계정관리 페이지 구축을 담당하였습니다. React 앱
          컴포넌트에 Typescript를 적용하는 작업을 10명의 개발자들과 한 팀으로
          진행하였습니다. 다양한 직무의 팀 구성원들과 유연한 커뮤니케이션을 하며
          업무합니다. 고객/서비스 중심적인 마인드로 웹 접근성을 고려한 서비스를
          구축하는 데 열정이 있습니다. 프론트 엔드 개발 분야의 개발 지식과
          유저를 이해하는 역량을 쌓고자 노력해 왔습니다.
        </p>
      </div>

      <h3 className={sectionTitle}>Work Experience</h3>
      <div className={sectionContainer}>
        <div className={row}>
          <div className={detail}>
            <div>
              <h4 className={orgName}>Formidable Labs</h4>
              <span className={jobTitle}>Software Engineer</span>
            </div>
            <span className={period}>2021 - 2022</span>
          </div>
          <div className={description}>
            <h5 className={subTitle}>Description</h5>
            <p>
              프론트엔드 엔지니어로 주요 5개 의류 브랜드의 반응형 React 웹 앱
              개발 프로젝트
            </p>
            <h5 className={subTitle}>What I did</h5>
            <ul>
              <li>
                제품 서치 페이지, 제품 디테일, 그리고 계정관리 페이지 구축을
                담당
              </li>
              <li>
                10명의 개발자, PM, 3명의 QA 엔지니어, UI 디자이너와 협업하여
                Agile 환경에서 작업
              </li>
              <li>
                시각화 된 도안을 만드는 등 스프린트 계획에 적극 참여하여 같이
                작업하는 팀원들의 업무분배를 효율적으로 향상시킴
              </li>
              <li>
                선 QA 체크 후 코드리뷰를 하는 방식의 work flow를 제안하여
                팀원들이 업무 순환 속도가 증가되었다는 피드백을 받음
              </li>
            </ul>
            <h5 className={subTitle}>Tech Stack</h5>
            <p>
              JavaScript, NextJS (ReactJS), TypeScript, Redux, GraphQL, Styled
              Components
            </p>
          </div>
        </div>

        <div className={row}>
          <div className={detail}>
            <div>
              <h4 className={orgName}>Power of Patients</h4>
              <span className={jobTitle}>Software Developer</span>
            </div>
            <span className={period}>2020 - 2021</span>
          </div>
          <div className={description}>
            <h5 className={subTitle}>Description</h5>
            <p>
              풀 스택 엔지니어로 외상성 뇌 손상 (TBI) 환자가 증상을 추적하는
              대시보드 개발 프로젝트
            </p>
            <h5 className={subTitle}>What I did</h5>
            <ul>
              <li>
                단독 개발자로서 작은 규모의 팀에서 React 앱의
                기획/개발/배포/운영
              </li>
              <li>
                MVP의 기존 버전 프론트엔드를 재설계하고 UI/UX 디자이너와 긴밀히
                협력하여 유저 피드백을 반영한 웹 앱 배포
              </li>
              <li>
                ExpressJS로 핵심 API를 재구축하고 authentication기능과 함께 보안
                layer를 추가
              </li>
              <li>
                Unit Test 작성과 코드리뷰를 work flow에 추가하여 코드의 질을
                향상시킴
              </li>
            </ul>
            <h5 className={subTitle}>Tech Stack</h5>
            <p>JavaScript, ReactJS, ExpressJS, Node, MySQL, AWS (S3, EC2)</p>
          </div>
        </div>
      </div>

      <h3 className={sectionTitle}>Project</h3>
      <div className={sectionContainer}>
        <div className={row}>
          <div className={project}>
            <h4 className={orgName}>
              <a href="https://github.com/FormidableLabs/nuka-carousel/pull/981">
                Nuka-Carousel
              </a>
            </h4>
            <span className={jobTitle}>Open Source React Component</span>
          </div>
          <div className={description}>
            <ul>
              <li>GitHub 오픈 소스 패키지 React carousel library에 기여</li>
              <li>useForwardRef 훅에 사용되는 type 정의</li>
            </ul>
          </div>
        </div>
        <div className={row}>
          <div className={project}>
            <h4 className={orgName}>Farkle</h4>
            <span className={jobTitle}>Personal Project - Dice Game</span>
          </div>
          <div className={description}>
            <ul>
              <li>
                웹 주사위 게임을 React 프레임워크와 WebSockets (socket.io)을
                사용하여 real-time action을 구축
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className={sectionTitle}>Education</h3>
      <div className={sectionContainer}>
        <div className={education}>
          <span>Western Governors University</span>
          <span>B.S. Computer Science / 컴퓨터 공학과</span>
          <span className={period}>2021 - 2024</span>
        </div>
        <div className={education}>
          <span>Galvanize Hack Reactor</span>
          <span>Software Engineering Bootcamp</span>
          <span className={period}>2019 - 2019</span>
        </div>
        <div className={education}>
          <span>Northern Arizona University</span>
          <span>B.S. Hotel & Restaurant Management / 호텔외식경영학과</span>
          <span className={period}>2011 - 2014</span>
        </div>
      </div>

      <div className={resume}>
        <span>
          이력서 다운로드{" "}
          <span role="img" aria-label="pointing">
            👉🏻
          </span>{" "}
          <a href="이지혜_Resume.pdf" download className={resumeLink}>
            CLICK HERE
          </a>
        </span>
        <span>
          Resume in English Download{" "}
          <span role="img" aria-label="pointing">
            👉🏻
          </span>{" "}
          <a href="Jeehyae Lee Resume.pdf" download className={resumeLink}>
            CLICK HERE
          </a>
        </span>
      </div>

      <span className={footer}>Made with &hearts; by Jeehyae Dance</span>
    </div>
  </Layout>
)

export default IndexPage
