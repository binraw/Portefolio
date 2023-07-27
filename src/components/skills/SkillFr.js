import iconGit from "../../assets/logogit.svg";
import iconReact from "../../assets/react.svg";
import iconHtml from "../../assets/html.svg";
import iconJavascript from "../../assets/javascript.svg";
import iconBash from "../../assets/bash.svg";
import iconWordpress from "../../assets/wordpress.svg";
import iconNodejs from "../../assets/nodejs.svg";
import iconCss from "../../assets/css.svg";
import iconSass from "../../assets/sass.svg";
import iconPuppeteer from "../../assets/pupperteer.svg";
import React, { useEffect, useState } from "react";
function Skill() {
	const [isTitleVisible, setIsTitleVisible] = useState(false);

	// Intersection Observer callback function
	const handleIntersection = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIsTitleVisible(true);
			}
		});
	};

	useEffect(() => {
		const options = {
			root: null, // Use the viewport as the root
			rootMargin: "0px", // No margin
			threshold: 1.0, // Fully visible in the viewport
		};

		const observer = new IntersectionObserver(handleIntersection, options);
		const titleElement = document.querySelector(".title-skill");
		if (titleElement) {
			observer.observe(titleElement);
		}

		return () => {
			if (titleElement) {
				observer.unobserve(titleElement);
			}
		};
	}, []);
	return (
		<div className={`skill ${isTitleVisible ? "show-text" : ""}`}>
			<h3 className="title-skill">Mes compétences à votre service. </h3>
			<div className="contener-skill">
				<ul className={`first-skill ${isTitleVisible ? "show" : ""}`}>
					<li className="atout">
						<img className="icon-logo" src={iconJavascript} alt="icon github" />
						Javascript
					</li>
					<li className="atout">
						<img className="icon-react" src={iconReact} alt="icon github" />
						React
					</li>
					<li className="atout">
						<img className="icon-logo" src={iconSass} alt="icon github" />
						SCSS
					</li>
					<li className="atout">
						<img className="icon-logo" src={iconHtml} alt="icon github" />
						HTML
					</li>
					<li className="atout">
						<img className="icon-logo" src={iconCss} alt="icon github" />
						CSS
					</li>
					<li className="atout">
						<img className="icon-logo" src={iconWordpress} alt="icon github" />
						JIMDO / WORDPRESS
					</li>
				</ul>
				<ul className={`second-skill ${isTitleVisible ? "show" : ""}`}>
					<li className="atout">
						<img src={iconGit} alt="icon github" />
						Git & GitHub
					</li>
					<li className="atout">
						<img src={iconNodejs} alt="icon github" />
						NodeJS
					</li>
					<li className="atout">
						<img src={iconPuppeteer} alt="icon github" />
						PUPPETEER
					</li>
					<li className="atout">
						<img className="icon-logo" src={iconBash} alt="icon github" />
						BASH
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Skill;
