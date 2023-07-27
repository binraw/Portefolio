import React from "react";
import Footer from "../../components/Footer/Footer";
import Presentation from "../../components/Pre/Presentation";
import About from "../../components/About/About";
import Projet from "../../components/Projet/Projet";
import Skill from "../../components/skills/Skill";
import Contact from "../../components/Contact/Contact";
function Home() {
	return (
		<div className="container">
			<Presentation />
			<About />
			<Skill />
			<Projet />
			<Contact />
			<Footer />
		</div>
	);
}

export default Home;
