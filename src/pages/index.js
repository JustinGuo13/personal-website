import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 15%;
	margin-top: 5%;

	h4 {
		color: #34ffdd;
		font-weight: 100;
		margin-bottom: 1rem;
	}

	h1 {
		color: #23d7ff;
		margin-bottom: 1rem;
	}

	h3 {
		color: #fff;
		font-weight: 100;
		margin-bottom: 1rem;
	}

	p {
		color: #fff;
		margin-bottom: 2rem;
	}
`

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<h4>Hello, my name is</h4>
			<h1>Peng Yang Guo.</h1>
			<h3>I'm a front end developer based in Los Angeles, CA.</h3>
			<p>Need a developer?</p>
			{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div> */}
			<Link to="/page-2/">Go to page 2</Link> <br />
		</Container>
	</Layout>
)

export default IndexPage
