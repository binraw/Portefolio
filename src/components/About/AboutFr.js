import loupe from "../../assets/loupe.png";

function About() {
	return (
		<div className="about ">
			<h3 className="title-about">
				A Propos de Moi
				<img id="section1" className="img-about" src={loupe} alt="loupe" />
			</h3>

			<div className="contener-about">
				<p className="texte-about">
					<div className="about-first">
						En tant que développeur front-end passionné, je suis constamment
						plongé dans le monde captivant du développement informatique. Mon
						expertise est principalement axée sur la création d'interfaces
						utilisateur attrayantes et intuitives pour les sites web et les
						applications.
					</div>
				</p>
				<p className="texte-about">
					<div className="about-first">
						Travailler dans le domaine du développement front-end, c'est bien
						plus qu'un simple travail pour moi ; c'est ma passion qui me permet
						de concrétiser des idées et de contribuer à façonner le monde
						numérique de demain.
					</div>
				</p>
			</div>
		</div>
	);
}
export default About;
