/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"
import Navbar from "./Navbar/Navbar"

const Footer = styled.footer`
	margin: 0 auto;
	padding: 1rem;
`

const SiteContent = styled.main`
	flex: 1;
`
const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />

			<StyledContent>
				<SiteContent>{children}</SiteContent>

				<Footer>© {new Date().getFullYear()}, Built by Peng Yang Guo</Footer>
			</StyledContent>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
