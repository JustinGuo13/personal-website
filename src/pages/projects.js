import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"
import Card from "../components/Projects/Card"

const ProjectsPage = () => {
	return (
		<Layout>
			<SEO title="Projects" />
			<StyledTitle>
				<h1>Projects</h1>
			</StyledTitle>
			<div>
				<Card />
			</div>
		</Layout>
	)
}

export default ProjectsPage
