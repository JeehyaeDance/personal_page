import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PostgresIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "postgres.png" }) {
        childImageSharp {
          fluid(maxWidth: 35, maxHeight: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ width: "35px", height: "35px", margin: "0" }}
    />
  )
}

export default PostgresIcon
