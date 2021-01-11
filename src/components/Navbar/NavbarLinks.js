import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
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
		background: #23d7ff;
		height: 1px;
		transition: all 0.4s ease-in;
	}

	&:hover {
		color: #23d7ff;
		&::after {
			width: 100%;
		}
	}

	&.active {
		color: #23d7ff;
	}

	@media (max-width: 768px) {
		padding: 20px 0;
		font-size: 1.5rem;
		z-index: 6;
	}
`

const NavbarLinks = () => {
	return (
		<>
			<NavItem to="/" activeClassName="active">
				Home
			</NavItem>
			<NavItem to="/about" activeClassName="active">
				About
			</NavItem>
			<NavItem to="/projects" activeClassName="active">
				Projects
			</NavItem>
			<NavItem to="/contact" activeClassName="active">
				Contact
			</NavItem>
			<NavItem to="/blog" activeClassName="active">
				Blog
			</NavItem>
		</>
	)
}

export default NavbarLinks
