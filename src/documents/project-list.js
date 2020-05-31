import React from "react"
import climbingDemo from "../gifs/climbing-day-demo.gif"
import farkleDemo from "../gifs/farkle-demo.gif"
import ReactIcon from "../components/icons/React"
import ExpressIcon from "../components/icons/Express"
import HerokuIcon from "../components/icons/Heroku"
import AwsIcon from "../components/icons/Aws"
import DockerIcon from "../components/icons/Docker"
import PostgresIcon from "../components/icons/Postgres"
import TypescriptIcon from "../components/icons/Typescript"

const projectList = [
  {
    projectName: "Climbing Day",
    demoImg: climbingDemo,
    demoAlt: "climbing day demo image",
    githubLink: "https://github.com/JeehyaeDance/rock-climbing-journal",
    appLink: "https://www.climbingday.com",
    appLinkForPage: "climbingday.com",
    appIntro: `Climbing Day is a rock climbing journal
     that allows users to log their rock climbing activity and track
     the improvement with weekly analytics.`,
    stackLogos: [
      <ReactIcon />,
      <AwsIcon />,
      <DockerIcon />,
      <PostgresIcon />,
      <ExpressIcon />,
    ],
  },
  {
    projectName: "Farkle",
    demoImg: farkleDemo,
    demoAlt: "Farkle demo image",
    githubLink: "https://github.com/JeehyaeDance/farkle",
    appLink: "https://farkleparty.com",
    appLinkForPage: "farkleparty.com",
    appIntro: `Farkle is a web version of the family friendly dice game called 'Farkle'. 
    It is designed to allow up to 6 players per lobby and utilizes websockets to provide a realtime interaction between players.`,
    stackLogos: [
      <ReactIcon />,
      <HerokuIcon />,
      <PostgresIcon />,
      <TypescriptIcon />,
      <ExpressIcon />,
    ],
  },
]

export default projectList
