import React from "react"
import styled from "styled-components"

import { Email } from "@styled-icons/material-outlined/Email"
import { Github } from "@styled-icons/feather/Github"
import { Linkedin } from "@styled-icons/feather/Linkedin"
import { StyledIconBase } from "@styled-icons/styled-icon"

const IconStyleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-height: 40vh;

	${StyledIconBase} {
		height: 10vh;
		width: 10vh;
		color: #34ffdd;
		margin: 1.25rem;
		display: inline-block;

		/* icon float animation */
		transition-duration: 0.3s;
		transition-timing-function: ease-out;

		&:hover,
		&:focus,
		&:active {
			transform: translateY(-10px);
		}
	}

	a {
		
	}
`

const ContactLinks = () => {
	return (
		<IconStyleWrapper>
			<a href="mailto:pyangguo@gmail.com">
				<Email />
			</a>

			<a href="https://github.com/PengYangGuo" target="_blank">
				<Github />
			</a>

			<a href="https://www.linkedin.com/in/pengyangguo/" target="_blank">
				<Linkedin />
			</a>
		</IconStyleWrapper>
	)
}

export default ContactLinks
