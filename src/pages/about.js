import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
	return (
		<Layout>
			<SEO title="About" />
			<h1>About</h1>
			<p>About page information</p>
			<p>
				<Link to="/contact">Contact me.</Link>
			</p>
		</Layout>
	)
}

export default AboutPage
