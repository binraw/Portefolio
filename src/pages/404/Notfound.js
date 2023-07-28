import React from "react";
import Footer from "../../components/Footer/Footer";

function NotFound() {
	return (
		<div className="container">
			<div className="container-error">
				<h1 className="title-error">404</h1>
				<p className="para-error">There's nothing to see here</p>
				<a className="lien-projet" href="/">
					Go Back
				</a>
			</div>

			<Footer />
		</div>
	);
}

export default NotFound;
