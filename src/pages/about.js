import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../pages/contact"

const AboutPage = () => {
	return (
		<Layout>
			<SEO title="About" />
			<Container>
				<h1>About</h1>
				<p>About page information</p>
				<p>
					<Link to="/contact">Contact me.</Link>
				</p>
			</Container>
		</Layout>
	)
}

export default AboutPage
