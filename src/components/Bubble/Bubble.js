import React from "react";
import selfphoto from "../../assets/selfphoto.jpg";

function Bubble({ show, mouseX, mouseY }) {
	return (
		<div
			className={`bubble ${show ? "show" : ""}`}
			style={{ left: mouseX, top: mouseY }}
		>
			<img src={selfphoto} alt="Bulle avec l'image" className="bubble-image" />
		</div>
	);
}

export default Bubble;
