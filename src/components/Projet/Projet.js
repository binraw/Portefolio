import React from "react";
import Slide from "../Slide/Slide";
import image1 from "../../assets/kasa.png";
import image2 from "../../assets/sophie.png";
import image3 from "../../assets/backprojet.png";
import image4 from "../../assets/ninaseo.png";
import image5 from "../../assets/aliceseo.png";

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
		{
			image: image3,
			title: "Project Back",
			text: "Welcome to the world of Mon Vieux Grimoire!Allow me to introduce the exciting project I developed: the complete backend of the 'Mon Vieux Grimoire' website. I took charge of managing all the routes, including adding, retrieving, deleting, and modifying content.This project provided me with a rewarding experience in building an API. I immersed myself in development to create a robust and high-performing API, allowing users to easily interact with the site's content.Throughout this development journey, I gained a deep understanding of databases, routes, and middlewares. Every aspect of the project was carefully designed to offer a smooth and intuitive user experience.Mon Vieux Grimoire is the result of my efforts and continuous learning in the field of backend development. I am thrilled to present this project, which was a real challenge and a valuable learning experience.Explore Mon Vieux Grimoire and discover how the API I created enables seamless interaction with this enchanting site!",
			lien: "https://github.com/binraw/Book_back",
		},
		{
			image: image4,
			title: "SEO Project",
			text: "Discover the captivating world of Nina Carducci, a passionate photographer!With great pride, I present to you the project where I had the privilege of optimizing Nina Carducci's website. Leveraging my skills in SEO and accessibility, I worked on enhancing her site, built using HTML, CSS, and JavaScript.Using advanced SEO techniques, I ensured that Nina's website ranks higher in search engine results. This newfound visibility allows her stunning photographs to attract even more enthusiasts who are captivated by her artistry.In parallel, I implemented accessibility improvements to make Nina's site welcoming to all users, regardless of their specific needs. Now, everyone can fully appreciate Nina's photographic talents, thanks to a seamless and intuitive browsing experience.Step into Nina Carducci's visual universe and be enthralled by the beauty of her photographic work. No matter your artistic sensibilities, each snapshot will carry you away with the emotion and creativity it exudes.Dive into this visual world, and let me know if I can assist you in creating equally stunning online experiences!",
			lien: "https://github.com/binraw/nina-carducci.github.io",
		},
		{
			image: image5,
			title: "Project Back",
			text: "Welcome to the world of Alice Ruelloux, an extraordinary business coach!I am thrilled to present the exciting project where I had the opportunity to optimize Alice Ruelloux's website. Using my skills in SEO and accessibility, I worked diligently to enhance her site, created with the Jimdo tool.Through advanced SEO techniques, I ensured that Alice's website achieves higher rankings in search engines. This optimization now allows her expertise to shine brighter, attracting a broader audience of professionals eager to benefit from her valuable coaching advice.In parallel, I paid special attention to the site's accessibility, making the experience enjoyable and seamless for all visitors, regardless of their situation. Now, every individual can easily explore Alice's business coaching expertise with an intuitive and inclusive navigation.Alice Ruelloux's website, optimized for SEO and accessibility, serves as an essential gateway to effective and personalized solutions for businesses and professionals seeking success.Step into the world of business coaching and discover how Alice can guide you towards achieving your professional goals. Whatever your needs may be, she will be there to lead you towards fulfillment and accomplishment.Explore this optimized site and get ready for a rewarding experience with Alice Ruelloux, your invaluable partner in the business world.",
			lien: "https://www.coaching-alice-ruelloux.fr/",
		},
	];

	return (
		<div className="projet">
			<Slide pictures={pictures} />
		</div>
	);
}

export default Projet;
