import React from "react";
import Footer from "../../components/Footer/Footer";
import PresentationFr from "../../components/Pre/PresentationFr";
import AboutFr from "../../components/About/AboutFr";
import ProjetFr from "../../components/Projet/ProjetFr";
import SkillFr from "../../components/skills/SkillFr";
import ContactFr from "../../components/Contact/ContactFr";
function Home() {
	return (
		<div className="container">
			<PresentationFr />
			<AboutFr />
			<SkillFr />
			<ProjetFr />
			<ContactFr />
			<Footer />
		</div>
	);
}

export default Home;
