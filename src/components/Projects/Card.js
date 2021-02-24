import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Github } from "@styled-icons/feather/Github"
import { ExternalLink } from "@styled-icons/feather/ExternalLink"
import { StyledIconBase } from "@styled-icons/styled-icon"

import { device } from "../device"

const ProjectCard = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 300px 1fr auto;
	background: #fff;
	border-radius: 10px;
	margin: 1rem 2rem;
	color: #101010;

	@media ${device.mobileXL} {
		grid-template-columns: 200px repeat(2, 1fr);
		grid-template-rows: 1fr auto;
	}

	@media ${device.tabletM} {
		grid-template-columns: 350px repeat(2, 1fr);
	}
`

const StyledImg = styled(Img)`
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	background: no-repeat center center/cover;

	@media ${device.mobileXL} {
		grid-column: 1 / 4;
		grid-row: 1 / 2;
	}

	@media ${device.tabletM} {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
`

const Wrapper = styled.figure``

const WrappedImg = props => (
	<Wrapper>
		<StyledImg {...props} />
	</Wrapper>
)

const Content = styled.div`
	grid-column: 1 / 3;
	grid-row: 2 /3;
	padding: 1.5rem;

	@media ${device.mobileXL} {
		grid-column: 1 / 4;
		grid-row: 2 / 3;
	}

	@media ${device.tabletM} {
		grid-column: 2 / 4;
		grid-row: 1 / 2;
	}
`
const Title = styled.h2`
	font-size: 1.75rem;
	line-height: 1.1;
	margin-bottom: 0.75rem;
`
const Description = styled.p`
	font-size: 1rem;
	line-height: 1.5;
	margin-bottom: 0.75rem;
`

const TechList = styled.ul`
	grid-column: 1 / 2;
	grid-row: 3 / 4;
	padding-bottom: 1.5rem;
	padding-left: 1.5rem;

	li {
		list-style: none;
	}

	@media ${device.mobileXL} {
		grid-column: 1 / 2;
		grid-row: 3 / 4;
	}

	@media ${device.tabletM} {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
`

const IconStyleWrapper = styled.div`
	@media ${device.mobileXL} {
		grid-column: 3 / 4;
		grid-row: 3 / 4;
	}

	@media ${device.tabletM} {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
	}

	${StyledIconBase} {
		display: inline-block;
		width: 10%;
		height: auto;
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
	ul {
		padding-bottom: 1.5rem;
		padding-right: 1.5rem;
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
									fluid(maxWidth: 1920, pngQuality: 100) {
										originalName
										...GatsbyImageSharpFluid
										...GatsbyImageSharpFluidLimitPresentationSize
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
						<StyledImg fluid={node.frontmatter.image.childImageSharp.fluid} />
						<Content>
							<Title>{node.frontmatter.title}</Title>
							<Description>{node.frontmatter.description}</Description>
						</Content>

						<TechList>
							{node.frontmatter.tech.map((tech, i) => [
								<strong key={i}>
									{tech}
									{i < node.frontmatter.tech.length - 1 ? " " : ""}
								</strong>,
							])}
						</TechList>

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
					</ProjectCard>
				)
			})}
		</div>
	)
}

export default Card
