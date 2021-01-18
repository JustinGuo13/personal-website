/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"
import Navbar from "./Navbar/Navbar"

const Footer = styled.footer`
	margin-top: auto;
	margin-left: auto;
	margin-right: auto;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-bottom: 1.875rem;
	padding-top: 3.5rem;
`
const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Navbar />

			<StyledContent>
				<main>{children}</main>
				<Footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</Footer>
			</StyledContent>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
