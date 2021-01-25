import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"
import Image from "../components/image"

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 5vh;
`
const StyledText = styled.div`
	display: flex;
	flex-direction: column;

	p {
		display: block;
		margin-block-start: 1rem;
		margin-block-end: 1rem;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-size: 1.1rem;
		color: #fff;
	}

	li {
		margin: 1rem 0;
		color: #fff;
		list-style: none;
	}

	li::before {
		content: "▹";
	}
`
const StyledImage = styled.div`
	float: right;
`

const AboutPage = () => {
	return (
		<Layout>
			<SEO title="About" />
			<StyledTitle>
				<h1>About me</h1>
			</StyledTitle>
			<Container>
				<StyledText>
					<p>
						Hello! I'm Peng, a front end developer based in Los Angeles, CA.
					</p>
					<p>
						I enjoy creating applications that anyone can use and offer simple
						useability.
						<br /> My goal is to build products that solve problems with high
						performance.
					</p>
					<p>
						Currently I'm attending Cal Poly Pomona and set to graduate in May
						2021.
					</p>
					<p>Here are a few technologies I've been working with recently:</p>

					<ul>
						<li>HTML & (S)CSS</li>
						<li>JavaScript (ES6+)</li>
						<li>React</li>
						<li>Gatsby</li>
					</ul>
				</StyledText>
				<StyledImage>
					<Image />
				</StyledImage>
			</Container>
		</Layout>
	)
}

export default AboutPage
