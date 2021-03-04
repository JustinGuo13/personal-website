import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactButton from "../components/ContactButton"

const Container = styled.div`
	margin-left: 20%;
	margin-top: 5%;

	h4 {
		color: #34ffdd;
		font-weight: 100;
		letter-spacing: 0.1rem;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 3rem;
		color: #23d7ff;
		letter-spacing: 0.1rem;
		margin-bottom: 1rem;
	}

	h3 {
		color: #fff;
		font-weight: 100;
		letter-spacing: 0.1rem;
		margin-bottom: 1rem;
	}

	p {
		color: #fff;
		letter-spacing: 0.1rem;
		margin-bottom: 3rem;
	}
`

const ResumeButton = styled.a`
	display: inline-block;
	font-size: 0.8rem;
	font-weight: 600;
	letter-spacing: 0.1rem;
	text-decoration: none;
	padding: 1.2rem 2.1rem;
	border-radius: 0.5rem;
	background: transparent;
	border: 0.1rem solid #34ffdd;
	color: #34ffdd;
	max-width: 100%;
	cursor: pointer;
	text-align: center;

	&:hover {
		background-color: #34ffdd14;
		-webkit-transition: 0.3 ease-in-out;
		-moz-transition: 0.3 ease-in-out;
		-ms-transition: 0.3 ease-in-out;
		-o-transition: 0.3 ease-in-out;
		transition: 0.3s ease-in-out;
	}
`

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Container>
				<h4>Hello, my name is</h4>
				<h1>Peng Yang Guo.</h1>
				<h3>I'm a front end developer based in Los Angeles, CA.</h3>
				<p>Need a developer?</p>
				<AniLink paintDrip to="/contact" hex="#34ffdd" duration={0.8}>
					<ContactButton path={`/contact`} description={`Contact me`} />
				</AniLink>

				<ResumeButton
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</ResumeButton>
			</Container>
		</Layout>
	)
}

export default IndexPage
