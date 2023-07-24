import React from "react";
import Slide from "../Slide/Slide";
import image1 from "../../assets/kasa.png";
import image2 from "../../assets/sophie.png";

function Projet() {
	const pictures = [
		{
			image: image1,
			title: "Kasa",
			text: "Projet React blablabal",
		},
		{
			image: image2,
			title: "Projet portefolio",
			text: "lalalalalallalalaT",
		},
		// Ajoutez plus d'objets pour d'autres images, descriptions et textes si nécessaire
	];

	return (
		<div className="projet">
			<Slide pictures={pictures} />
		</div>
	);
}

export default Projet;
