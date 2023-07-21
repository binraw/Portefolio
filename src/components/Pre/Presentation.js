import logomain from "../../assets/main.png";
import React, { useState } from "react";
import Bubble from "../Bubble/Bubble";

// import MorphingText from "../Morphing/MorphingText.js";

import BtnGit from "../Btn/BtnGit";
function Presentation() {
	const [showBubble, setShowBubble] = useState(false);
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);

	const handleMouseEnter = (e) => {
		setShowBubble(true);
	};

	const handleMouseLeave = () => {
		setShowBubble(false);
	};

	const handleMouseMove = (e) => {
		setMouseX(e.pageX);
		setMouseY(e.pageY);
	};

	return (
		<>
			{/* <img className="logo" src={logomain} alt="main rouge" /> */}
			<div className="presentation">
				<h1
					className="firstname"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={handleMouseMove}
				>
					Truvelot Robin
				</h1>
				<h2
					className="job"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={handleMouseMove}
				>
					Frontend Developer.
				</h2>
				<BtnGit />
				<Bubble show={showBubble} mouseX={mouseX} mouseY={mouseY} />
			</div>
		</>
	);
}
export default Presentation;
