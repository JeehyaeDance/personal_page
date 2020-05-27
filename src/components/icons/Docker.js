import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DockerIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "horizontal-logo-monochromatic-white.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ width: "150px", height: "35px" }}
    />
  )
}

export default DockerIcon
