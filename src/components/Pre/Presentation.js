import logoepee from "../../assets/logoepee.svg";

// import MorphingText from "../Morphing/MorphingText.js";

import BtnGit from "../Btn/BtnGit";
function Presentation() {
	return (
		<>
			<img className="logo" src={logoepee} alt="epee" />
			<div className="presentation">
				<h1 className="firstname">Truvelot Robin</h1>
				<h2 className="job">Frontend Developer.</h2>
				<BtnGit />
			</div>
		</>
	);
}
export default Presentation;
