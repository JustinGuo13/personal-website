import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title="404: Not found" />
			<h1>404: Not Found</h1>
			<p>
				<Link to="/">Go to Home</Link>
			</p>
		</Layout>
	)
}

export default NotFoundPage
