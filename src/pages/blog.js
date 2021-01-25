import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"

const BlogPage = () => {
	return (
		<Layout>
			<SEO title="Blog" />
			<StyledTitle>
				<h1>Blog</h1>
			</StyledTitle>
		</Layout>
	)
}

export default BlogPage
