import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";

import NotFound from "../pages/404/Notfound";

function AppRouter() {
	return (
		<Router>
			<nav className="navigation-div">
				<ul className="navigation-bar">
					<li>
						<Link to="/">ACCUEIL</Link>
					</li>

					<li>
						<Link to="/about">PROJETS</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
