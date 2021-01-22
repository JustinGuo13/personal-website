import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../pages/contact"

const BlogPage = () => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Container>
				<h1>Blog</h1>
			</Container>
		</Layout>
	)
}

export default BlogPage
