import React, { useState, useEffect } from "react";

const texts = [
	"If",
	"You",
	"Like",
	"It",
	"Please",
	"Give",
	"a Love",
	":)",
	"by @DotOnion",
];

const morphTime = 1000; // Durée du morphing en millisecondes

const MorphingText = () => {
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, morphTime);

		return () => clearInterval(interval);
	}, []);

	return <span>{texts[textIndex]}</span>;
};

export default MorphingText;
