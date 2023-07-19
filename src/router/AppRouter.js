import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";

import NotFound from "../pages/404/Notfound";

function AppRouter() {
	return (
		<Router>
			<nav className="navigation-div">
				<ul className="navigation-bar">
					<li>
						<Link to="/">ABOUT</Link>
					</li>

					<li>
						<Link to="/about">WORKS</Link>
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
