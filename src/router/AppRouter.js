import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeFr from "../pages/Home/HomeFr";
import NotFound from "../pages/404/Notfound";

function AppRouter() {
	return (
		<Router>
			<nav>
				<ul>
					<li className="language-button">
						<Link className="language-link" to="/Portefolio/fr">
							Fr
						</Link>
					</li>
					<li className="language-button">
						<Link className="language-link" to="/Portefolio">
							En
						</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/Portefolio" element={<Home />} />
				<Route path="/Portefolio/fr" element={<HomeFr />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
