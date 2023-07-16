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
function Skill() {
	return (
		<div className="skill">
			<h3 className="title-skill">Mes compétences à votre service</h3>
			<div className="contener-skill">
				<ul className="first-skill">
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
				<ul className="second-skill">
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
