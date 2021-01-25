import React from "react"
import styled from "styled-components"

import ContactLinks from "../components/Contact/ContactLinks"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const StyledTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 1rem;
	color: #23d7ff;
`
const ContactPage = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<StyledTitle>
				<h1>Contact</h1>
				<p>Contact information</p>
			</StyledTitle>

			<ContactLinks />
		</Layout>
	)
}

export default ContactPage
