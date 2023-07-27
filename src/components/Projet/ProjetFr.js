import React from "react";
import SlideFr from "../Slide/SlideFr";
import image1 from "../../assets/kasa.png";
import image2 from "../../assets/sophie.png";
import image3 from "../../assets/backprojet.png";
import image4 from "../../assets/ninaseo.png";
import image5 from "../../assets/aliceseo.png";

function Projet() {
	const pictures = [
		{
			image: image1,
			title: "Kasa , React",
			text: "Bienvenue sur Kasa - Votre destination de rêve pour des escapades uniques ! Je suis ravi de vous présenter mon dernier projet, Kasa, un site web passionnant que j'ai développé en utilisant React. Inspiré par l'esthétique et la convivialité d'Airbnb, Kasa est un site miroir qui offre une expérience de voyage inoubliable à chaque utilisateur.Lors de la création de Kasa, j'ai mis l'accent sur deux éléments clés : des effets visuels époustouflants et un design adaptatif. Grâce à des animations fluides et des transitions élégantes, chaque interaction sur le site est agréable et captivante. Que ce soit pour parcourir différentes options d'hébergement ou pour effectuer une réservation en quelques clics, l'expérience utilisateur est optimisée pour s'adapter parfaitement à tous les appareils, des grands écrans d'ordinateur aux smartphones. Le design épuré et moderne de Kasa met en valeur les magnifiques images de chaque propriété, suscitant instantanément l'envie de partir en voyage. De plus, le site offre des fonctionnalités intuitives pour filtrer les résultats de recherche en fonction des préférences spécifiques des utilisateurs, garantissant ainsi une expérience de navigation personnalisée et pertinente. En mettant l'accent sur la performance et la convivialité, j'ai veillé à ce que chaque visiteur se sente immédiatement à l'aise en explorant différentes destinations, caractéristiques des propriétés et avis d'autres voyageurs satisfaits. Explorez Kasa dès maintenant et préparez-vous à vivre des expériences inoubliables ! Vos commentaires et impressions sont hautement appréciés, car votre satisfaction est ma plus grande récompense. Préparez-vous à entreprendre des voyages remarquables avec Kasa ! Bon voyage !",
			lien: "https://github.com/binraw/Kasa",
		},
		{
			image: image2,
			title: "Project portefolio",
			text: "Bienvenue dans le portfolio captivant de Sophie Bluel - Architecte d'intérieur extraordinaire ! Permettez-moi de vous présenter fièrement mon projet : le site de rendu visuel exceptionnel développé entièrement en HTML, CSS et JavaScript vanilla. En mettant en œuvre ces langages fondamentaux du web, j'ai créé une plateforme élégante qui met en valeur le talent et la créativité de l'architecte d'intérieur renommée, Sophie Bluel.Chaque détail du site a été soigneusement pensé pour refléter le style unique de Sophie et offrir aux visiteurs une expérience visuelle immersive. Les images époustouflantes de ses projets, combinées à une mise en page fluide et moderne, permettent aux utilisateurs de plonger dans l'univers créatif de Sophie. Mais ce n'est pas tout ! Pour rendre le site véritablement dynamique, j'ai géré les appels à la base de données en utilisant JavaScript. Cela signifie que les projets de Sophie peuvent être mis à jour facilement, permettant ainsi aux visiteurs de découvrir régulièrement ses dernières créations.Naviguer sur le portfolio de Sophie est une expérience intuitive et conviviale. Les différentes sections du site ont été conçues pour mettre en évidence ses compétences variées, des projets résidentiels aux designs commerciaux impressionnants. En tant qu'architecte d'intérieur, Sophie Bluel possède une expertise inégalée pour transformer des espaces et créer des ambiances uniques. Grâce à ce site dynamique, vous pouvez explorer son portfolio en constante évolution et être inspiré par sa vision artistique exceptionnelle.Que vous recherchiez des idées pour votre propre intérieur ou que vous admiriez simplement un coup de génie, le portfolio de Sophie Bluel est une véritable source d'inspiration. Plongez dans le monde fascinant de l'architecture d'intérieur avec Sophie Bluel et laissez-vous enchanter par son talent artistique. Profitez de votre visite sur son portfolio et n'hésitez pas à la contacter pour vos futurs projets de design d'intérieur.",
			lien: "https://github.com/binraw/portefolio-sophie-bluel",
		},
		{
			image: image3,
			title: "Project Back",
			text: "Bienvenue dans l'univers de Mon Vieux Grimoire ! Permettez-moi de vous présenter le projet passionnant que j'ai développé : le backend complet du site 'Mon Vieux Grimoire'. J'ai pris en charge la gestion de toutes les routes, y compris l'ajout, la récupération, la suppression et la modification de contenus. Ce projet m'a offert une expérience enrichissante dans la création d'une API. Je me suis plongé(e) dans le développement pour créer une API robuste et performante, permettant aux utilisateurs d'interagir facilement avec le contenu du site.Tout au long de cette aventure de développement, j'ai acquis une compréhension approfondie des bases de données, des routes et des middlewares. Chaque aspect du projet a été soigneusement conçu pour offrir une expérience utilisateur fluide et intuitive.Mon Vieux Grimoire est le fruit de mes efforts et de mon apprentissage continu dans le domaine du développement backend. Je suis ravi(e) de vous présenter ce projet qui a été un véritable défi et une précieuse expérience d'apprentissage.Explorez Mon Vieux Grimoire et découvrez comment l'API que j'ai créée permet une interaction harmonieuse avec ce site enchanteur !",
			lien: "https://github.com/Welcome ",
		},
		{
			image: image4,
			title: "SEO Project",
			text: "Découvrez l'univers captivant de Nina Carducci, une photographe passionnée ! C'est avec une grande fierté que je vous présente le projet où j'ai eu le privilège d'optimiser le site de Nina Carducci. En utilisant mes compétences en SEO et en accessibilité, j'ai travaillé sur l'amélioration de son site, construit en HTML, CSS et JavaScript.Grâce à des techniques avancées en matière de référencement (SEO), j'ai veillé à ce que le site de Nina soit mieux classé dans les résultats des moteurs de recherche. Cette visibilité accrue permet à ses superbes photographies d'attirer encore plus d'enthousiastes captivés par son art.En parallèle, j'ai mis en œuvre des améliorations d'accessibilité pour rendre le site de Nina accueillant pour tous les utilisateurs, quels que soient leurs besoins spécifiques. Désormais, chacun peut pleinement apprécier les talents photographiques de Nina, grâce à une expérience de navigation fluide et intuitive. Plongez dans l'univers visuel de Nina Carducci et laissez-vous enchanter par la beauté de son travail photographique. Quelles que soient vos sensibilités artistiques, chaque instantané vous transportera avec l'émotion et la créativité qu'il dégage. Plongez dans ce monde visuel, et n'hésitez pas à me faire savoir si je peux vous aider à créer des expériences en ligne tout aussi éblouissantes !",
			lien: "https://github.com/binraw/nina-carducci.github.io",
		},
		{
			image: image5,
			title: "SEO Project Jimdo",
			text: "Bienvenue dans l'univers d'Alice Ruelloux, une coach en entreprise extraordinaire ! Je suis ravi(e) de vous présenter le projet passionnant où j'ai eu l'opportunité d'optimiser le site d'Alice Ruelloux. En utilisant mes compétences en SEO et en accessibilité, j'ai travaillé avec dévouement pour améliorer son site, créé avec l'outil Jimdo. Grâce à des techniques avancées en référencement (SEO), j'ai veillé à ce que le site d'Alice soit mieux positionné dans les moteurs de recherche. Cette optimisation permet désormais à son expertise de rayonner davantage, attirant ainsi un public plus large de professionnels désireux de bénéficier de ses précieux conseils en coaching. En parallèle, j'ai accordé une attention particulière à l'accessibilité du site, rendant l'expérience agréable et fluide pour tous les visiteurs, quelle que soit leur situation. Désormais, chaque individu peut aisément explorer le savoir-faire et l'accompagnement d'Alice en entreprise, grâce à une navigation intuitive et inclusive.Le site d'Alice Ruelloux, optimisé pour le SEO et l'accessibilité, sert de passerelle essentielle vers des solutions efficaces et personnalisées pour les entreprises et les professionnels en quête de succès. Plongez dans le monde du coaching en entreprise et découvrez comment Alice peut vous guider vers l'atteinte de vos objectifs professionnels. Quels que soient vos besoins, elle sera là pour vous accompagner vers l'épanouissement et la réussite.Explorez ce site optimisé et préparez-vous à une expérience enrichissante avec Alice Ruelloux, votre précieux partenaire dans le monde des affaires.",
			lien: "https://www.coaching-alice-ruelloux.fr/",
		},
	];

	return (
		<div id="projet" className="projet">
			<SlideFr pictures={pictures} />
		</div>
	);
}

export default Projet;
