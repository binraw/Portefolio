import loupe from "../../assets/loupe.png";

function About() {
	return (
		<div className="about">
			<h3 className="title-about">
				About Me <img className="img-about" src={loupe} alt="loupe" />
			</h3>

			<div className="contener-about">
				<p className="texte-about">
					<div className="about-first">
						As a passionate front-end developer, I am constantly immersed in the
						captivating world of computer development. My expertise is primarily
						focused on creating attractive and intuitive user interfaces for
						websites and applications.
					</div>
				</p>
				<p className="texte-about">
					<div className="about-first">
						Working in the front-end development field is more than just a job
						for me; it's my passion that allows me to turn ideas into reality
						and contribute to shaping the digital world of tomorrow.
					</div>
				</p>
			</div>
		</div>
	);
}
export default About;
