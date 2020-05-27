import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ResumeImg = () => {
  const data = useStaticQuery(graphql`
    query {
      resumeImage: file(relativePath: { eq: "JeehyaeResume.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.resumeImage.childImageSharp.fluid} />
}

export default ResumeImg
