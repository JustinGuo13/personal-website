import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Card = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							description
							external
							github
							tech
							title
							image {
								childImageSharp {
									fluid(maxWidth: 600, pngQuality: 90) {
										originalName
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						id
					}
				}
			}
		}
	`)

	
	return (
		<div>
			<ul>
				
				{data.allMarkdownRemark.edges.map(({ node}) => {
					return (
						<div key={node.id}>
							<h2>{node.frontmatter.title}</h2>
							<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
							<p>{node.frontmatter.description}</p>
							<a>{node.frontmatter.external}</a>
							<a>{node.frontmatter.github}</a>
							<li>{node.frontmatter.tech}</li>
						</div>
					)
				})}
			</ul>
		</div>
	)
}

export default Card
