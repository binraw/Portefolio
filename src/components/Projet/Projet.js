import React from "react";
import Slide from "../Slide/Slide";
import image1 from "../../assets/kasa.png";
import image2 from "../../assets/sophie.png";

function Projet() {
	const pictures = [
		{
			image: image1,
			title: "Kasa , React Project",
			text: "Welcome to Kasa - Your dream destination for unique getaways!I am thrilled to introduce my latest project, Kasa, an exciting website that I developed using React. Inspired by the aesthetics and user-friendliness of Airbnb, Kasa is a mirror site that offers an unforgettable travel experience to each user.During the creation of Kasa, I focused on two key elements: stunning visual effects and responsive design. With smooth animations and elegant transitions, every interaction on the site is pleasant and captivating. Whether browsing through various accommodation options or making a reservation with just a few clicks, the user experience is optimized to adapt flawlessly to all devices, from large computer screens to smartphones.Kasa's sleek and modern design highlights the beautiful images of each property, instantly igniting the desire to embark on a journey. Moreover, the site provides intuitive features to filter search results based on users' specific preferences, ensuring a personalized and relevant browsing experience.Emphasizing performance and user-friendliness, I ensured that every visitor feels immediately at ease while exploring different destinations, property features, and reviews from other satisfied travelers.Explore Kasa now and be prepared to indulge in unforgettable experiences! Your feedback and impressions are highly valued as your satisfaction is my greatest reward.Get ready to embark on remarkable journeys with Kasa! Bon voyage!",
			lien: "https://github.com/binraw/Kasa",
		},
		{
			image: image2,
			title: "Project portefolio",
			text: "Welcome to the captivating portfolio of Sophie Bluel - Extraordinary Interior Architect!Allow me to proudly present my project: the exceptional visual rendering site developed entirely in HTML, CSS, and vanilla JavaScript. By implementing these fundamental web languages, I have crafted an elegant platform that showcases the talent and creativity of the renowned interior architect, Sophie Bluel.Every detail of the site has been carefully designed to reflect Sophie's unique style and provide visitors with an immersive visual experience. The stunning images of her projects, combined with a smooth and modern layout, allow users to delve into Sophie's creative universe.But that's not all! To make the site truly dynamic, I managed database calls using JavaScript. This means that Sophie's projects can be easily updated, allowing visitors to regularly discover her latest creations.Navigating Sophie's portfolio is an intuitive and user-friendly experience. The various sections of the site have been crafted to highlight her diverse skills, ranging from residential projects to impressive commercial designs.As an interior architect, Sophie Bluel possesses unparalleled expertise in transforming spaces and creating unique ambiences. Thanks to this dynamic site, you can explore her ever-evolving portfolio and be inspired by her exceptional artistic vision.Whether you're seeking ideas for your own interior or simply admiring a stroke of genius, Sophie Bluel's portfolio is a true source of inspiration.Dive into the fascinating world of interior architecture with Sophie Bluel and be enchanted by her artistic talent. Enjoy your visit to her portfolio and feel free to contact her for your future interior design projects.",
			lien: "https://github.com/binraw/portefolio-sophie-bluel",
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
