import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../pages/contact"

const ProjectsPage = () => {
	return (
		<Layout>
			<SEO title="Projects" />
			<Container>
				<h1>Projects</h1>
				<p>Projects information</p>
			</Container>
		</Layout>
	)
}

export default ProjectsPage
