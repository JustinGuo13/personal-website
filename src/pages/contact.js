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
	color: #34ffdd;

	p {
		margin-top: 1rem;
		color: #fff;
	}
`
const ContactPage = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<StyledTitle>
				<h1>Contact</h1>
				<p>You can reach me via email below for any inquiries. </p>
			</StyledTitle>

			<ContactLinks />
		</Layout>
	)
}

export default ContactPage
