import logomain from "../../assets/main.png";

// import MorphingText from "../Morphing/MorphingText.js";

import BtnGit from "../Btn/BtnGit";
function Presentation() {
	return (
		<>
			<img className="logo" src={logomain} alt="main rouge" />
			<div className="presentation">
				<h1 className="firstname">Truvelot Robin</h1>
				<h2 className="job">Frontend Developer.</h2>
				<BtnGit />
			</div>
		</>
	);
}
export default Presentation;
