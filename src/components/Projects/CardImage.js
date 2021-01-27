import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CardImage = ({ fileName, alt, style }) => {
	const { allImageSharp } = useStaticQuery(graphql`
		query {
			allImageSharp {
				nodes {
					fluid(maxWidth: 1600) {
						originalName
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	const fluid = allImageSharp.nodes.find(
		name => name.fluid.originalName === fileName
	).fluid

	return <Img fluid={fluid} alt={alt} style={style} />
}

export default CardImage
