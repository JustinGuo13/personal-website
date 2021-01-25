import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"

const ProjectsPage = () => {
	return (
		<Layout>
			<SEO title="Projects" />
			<StyledTitle>
				<h1>Projects</h1>
				<p>Projects information</p>
			</StyledTitle>
		</Layout>
	)
}

export default ProjectsPage
