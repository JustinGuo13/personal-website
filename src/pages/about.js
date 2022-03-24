import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledTitle } from "../pages/contact"
import Image from "../components/image"

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	margin: 2rem 30rem;
	padding: 1rem;
	align-items: center;
	justify-items: center;
	color: #fff;
`
const StyledText = styled.div`
	p {
		margin: 1rem;
		letter-spacing: 0.1rem;
		line-height: 1.6rem;
		font-size: 1.1rem;
		color: #fff;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(140px, 200px));
		padding: 0px;
		margin-top: 0.5rem;
		overflow: hidden;
		list-style: none;
	}

	li {
		margin: 0.2rem;
		letter-spacing: 0.1rem;
		color: #fff;
	}

	li::before {
		content: "▹";
		color: #34ffdd;
		margin-right: 0.5rem;
	}
`
const StyledImage = styled.div``

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
						Hello! My name is Peng, and I enjoy creating things that live on the
						internet. My interest in web development started back in 2018 when I
						decided to create websites - turns out creating a website was a lot
						of fun.
					</p>
					<p>
						I enjoy creating applications that anyone can use and that offer
						simple usability. Currently, I am freelancing as a web developer.
					</p>
					<p>
						I graduated from Cal Poly Pomona in 2021 and majored in Computer
						Science.
					</p>
					<p>Here are a few technologies I've been working with recently:</p>

					<ul>
						<li>Solidity</li>
						<li>Next.js</li>
						<li>React</li>
						<li>HTML/CSS</li>
						<li>JavaScript (ES6+)</li>
						<li>Tailwind CSS</li>
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
