import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavItem = styled(AniLink)`
	text-decoration: none;
	color: #ffffff;
	display: inline-block;
	white-space: nowrap;
	margin: 0 1vw;
	transition: all 200ms ease-in;
	position: relative;

	&:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0%;
		content: ".";
		color: transparent;
		background: #34ffdd;
		height: 1px;
		transition: all 0.4s ease-in;
	}

	&:hover {
		color: #34ffdd;
		&::after {
			width: 100%;
		}
	}

	&.active {
		color: #34ffdd;
	}

	@media (max-width: 48em) {
		padding: 20px 0;
		font-size: 1.5rem;
		z-index: 6;
	}
`

const NavbarLinks = () => {
	return (
		<>
			<NavItem paintDrip to="/" hex="#34ffdd" duration={0.8}>
				Home
			</NavItem>
			<NavItem paintDrip to="/about" hex="#34ffdd" duration={0.8}>
				About
			</NavItem>
			<NavItem paintDrip to="/projects" hex="#34ffdd" duration={0.8}>
				Projects
			</NavItem>
			<NavItem paintDrip to="/contact" hex="#34ffdd" duration={0.8}>
				Contact
			</NavItem>
			<NavItem paintDrip to="/blog" hex="#34ffdd" duration={0.8}>
				Blog
			</NavItem>
		</>
	)
}

export default NavbarLinks
