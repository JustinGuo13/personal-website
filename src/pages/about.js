import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"
import Image from "../components/image"

const StyledAbout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
`
const StyledImage = styled.div`
	margin-left: 30%;
`

const AboutPage = () => {
	return (
		<Layout>
			<SEO title="About" />

			<StyledTitle>
				<h1>About me</h1>
			</StyledTitle>
			<StyledAbout>
				<p>Hello! I'm Peng, a front end developer based in Los Angeles, CA.</p>
				<p>
					I enjoy creating applications that anyone can use and offer simple
					useability. My goal is to build products that solve problems with high
					performance.
				</p>
				<p>
					Currently I'm attending Cal Poly Pomona and set to graduate in May
					2021.
				</p>
				<p>Here are a few technologies I've been working with recently:</p>
			</StyledAbout>

			<ul>
				<li>HTML & (S)CSS</li>
				<li>JavaScript (ES6+)</li>
				<li>React</li>
				<li>Gatsby</li>
			</ul>
			<StyledImage>
				<Image />
			</StyledImage>
		</Layout>
	)
}

export default AboutPage
