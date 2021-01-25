import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const Button = styled.button`
	display: inline-block;
	font-family: "Montserrat";
	font-weight: 600;
	font-size: 0.8rem;
	letter-spacing: 0.1rem;
	padding: 1.2rem;
	border-radius: 0.5rem;
	background: transparent;
	border: 0.1rem solid #34ffdd;
	color: #34ffdd;
	max-width: 100%;
	cursor: pointer;
	text-align: center;

	&:hover {
		background-color: #34ffdd14;
		-webkit-transition: 0.3 ease-in-out;
		-moz-transition: 0.3 ease-in-out;
		-ms-transition: 0.3 ease-in-out;
		-o-transition: 0.3 ease-in-out;
		transition: 0.3s ease-in-out;
	}
`

const ContactButton = ({ path, description }) => {
	return <Button onClick={() => navigate(`${path}`)}>{description}</Button>
}

export default ContactButton
