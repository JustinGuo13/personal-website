import React from "react"
import styled from "styled-components"

import { Email } from "@styled-icons/material-outlined/Email"
import { Github } from "@styled-icons/feather/Github"
import { Linkedin } from "@styled-icons/feather/Linkedin"
import { StyledIconBase } from "@styled-icons/styled-icon"

const IconStyleWrapper = styled.div`
	margin-top: 10%;
	${StyledIconBase} {
		height: 10vh;
		width: 10vh;
		color: red;
		display: inline-block;
		margin: 1rem;
	}
`

const ContactLinks = () => {
	return (
		<IconStyleWrapper>
			<a href="https://github.com/PengYangGuo" target="_blank">
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
