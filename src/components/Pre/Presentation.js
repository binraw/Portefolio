import nuage from "../../assets/nuage.svg";
import nuageb from "../../assets/nuageb.svg";
import nuagec from "../../assets/nuagec.svg";
import nuaged from "../../assets/nuaged.svg";
import nuagee from "../../assets/nuagee.svg";

import selfphoto from "../../assets/selfphoto.jpg";
import BtnGit from "../Btn/BtnGit";
function Presentation() {
	return (
		<div className="presentation">
			<h1 className="firstname">Truvelot Robin</h1>
			<h2 className="job">Développeur Front-end.</h2>
			<img className="nuage-one" src={nuage} alt="un nuage" />
			<img className="nuage-two" src={nuageb} alt="un nuage" />
			<img className="nuage-three" src={nuagec} alt="un nuage" />
			<img className="last-nuage" src={nuaged} alt="un nuage" />
			<img className="nuagee" src={nuagee} alt="un nuage" />

			<div className="photo-lien">
				<img className="portrait" src={selfphoto} alt="Truvelot Robin" />
				<BtnGit />
			</div>
		</div>
	);
}
export default Presentation;
