import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Github } from "@styled-icons/feather/Github"
import { ExternalLink } from "@styled-icons/feather/ExternalLink"
import { StyledIconBase } from "@styled-icons/styled-icon"

const ProjectCard = styled.div`
	border: solid red;
`

const Content = styled.div``

const IconStyleWrapper = styled.div`
	
	${StyledIconBase} {
		display: inline-block;
		height: 10vh;
		width: 10vh;
		color: #34ffdd;

		/* icon float animation */
		transition-duration: 0.3s;
		transition-timing-function: ease-out;

		&:hover,
		&:focus,
		&:active {
			transform: translateY(-10px);
		}
	}

	li {
		display: inline;
		margin: 1.25rem;
		list-style: none;
	}
`

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
			{data.allMarkdownRemark.edges.map(({ node }) => {
				return (
					<ProjectCard key={node.id}>
						<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
						<Content>
							<h2>{node.frontmatter.title}</h2>
							<p>{node.frontmatter.description}</p>
							<li>{node.frontmatter.tech}</li>
							<IconStyleWrapper>
								<ul>
									<li>
										<a href={node.frontmatter.external}>
											<ExternalLink />
										</a>
									</li>
									<li>
										<a href={node.frontmatter.github}>
											<Github />
										</a>
									</li>
								</ul>
							</IconStyleWrapper>
						</Content>
					</ProjectCard>
				)
			})}
		</div>
	)
}

export default Card
