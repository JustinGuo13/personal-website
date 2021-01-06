import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<h1>Contact</h1>
			<p>Contact information</p>
			<p>
				<a href="https://github.com/PengYangGuo" target="_blank">
					Github
				</a>
			</p>
			<p>
				<a href="https://www.linkedin.com/in/pengyangguo/" target="_blank">
					LinkedIn
				</a>
			</p>
		</Layout>
	)
}

export default ContactPage
