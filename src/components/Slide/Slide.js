import React, { useState } from "react";
import ArrowR from "../../assets/fleched.png";
import ArrowL from "../../assets/flecheg.png";

function Slide(props) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleClickNext = () => {
		let nextIndex = currentImageIndex + 1;
		if (nextIndex >= props.pictures.length) {
			nextIndex = 0;
		}
		setCurrentImageIndex(nextIndex);
	};

	const handleClickPrevious = () => {
		let previousIndex = currentImageIndex - 1;
		if (previousIndex < 0) {
			previousIndex = props.pictures.length - 1;
		}
		setCurrentImageIndex(previousIndex);
	};

	const currentImage = props.pictures[currentImageIndex];

	return (
		<>
			<div className="container-imgpos">
				<img
					className="cover-detail"
					src={currentImage.image}
					alt="arrow pass card"
				/>
				<div className="container-number-slide">
					<p className="number-slide">
						{currentImageIndex + 1}/{props.pictures.length}
					</p>
				</div>
				<p className="image-description">{currentImage.title}</p>
				<p className="image-text">{currentImage.text}</p>
				<div>
					<button className="btn-change" onClick={handleClickPrevious}>
						<img className="arrow-left" src={ArrowL} alt="arrow pass card" />
					</button>
					<button className="btn-change" onClick={handleClickNext}>
						<img className="arrow-right" src={ArrowR} alt="arrow next card" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Slide;
