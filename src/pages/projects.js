import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"
import CardImage from "../components/Projects/CardImage"

const ProjectsPage = () => {
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
						}
					}
				}
			}
		}
	`)

	console.log(data)

	return (
		<Layout>
			<SEO title="Projects" />
			<StyledTitle>
				<h1>Projects</h1>
			</StyledTitle>
			<ul>
				{data.allMarkdownRemark.edges.map(edge => {
					return (
						<div>
							<h2>{edge.node.frontmatter.title}</h2>
							<p>{edge.node.frontmatter.description}</p>
							<a>{edge.node.frontmatter.external}</a>
							<a>{edge.node.frontmatter.github}</a>
							<li>{edge.node.frontmatter.tech}</li>
						</div>
					)
				})}
			</ul>
		</Layout>
	)
}

export default ProjectsPage
