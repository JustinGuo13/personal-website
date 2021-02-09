import React from "react"
import styled from "styled-components"

import CardImage from "./CardImage"

const Card = () => {
	return (
		<div>
			<CardImage
				fileName="project1.png"
				style={{ width: "300px" }}
				alt="Forkify"
			/>
			<CardImage
				fileName="project2.png"
				style={{ width: "300px" }}
				alt="Omnifood"
			/>
			<CardImage
				fileName="project3.png"
				style={{ width: "300px" }}
				alt="Youtube Player"
			/>
			<CardImage
				fileName="project4.png"
				style={{ width: "300px" }}
				alt="Image Search"
			/>
			
		</div>
	)
}

export default Card
