import React from "react"
import styled from "styled-components"

import { Mail as Email } from "@styled-icons/feather/Mail"
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
		display: inline-block;
		height: 10vh;
		width: 10vh;
		color: #34ffdd;

		/* icon float animation */
		transition-duration: 0.3s;
		transition-timing-function: ease-out;

		&:hover,
		&:focus,
		&:active {
			transform: translateY(-10px);
		}
	}

	li{
		display: inline;
		margin: 1.25rem;
		list-style: none;
	}
`

const ContactLinks = () => {
	return (
		<IconStyleWrapper>
			<ul>
				<li>
					<a href="mailto:pyangguo@gmail.com">
						<Email />
					</a>
				</li>

				<li>
					<a href="https://github.com/PengYangGuo" target="_blank">
						<Github />
					</a>
				</li>

				<li>
					<a href="https://www.linkedin.com/in/pengyangguo/" target="_blank">
						<Linkedin />
					</a>
				</li>
			</ul>
		</IconStyleWrapper>
	)
}

export default ContactLinks
