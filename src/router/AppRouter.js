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
						<Link className="language-link" to="/fr">
							Fr
						</Link>
					</li>
					<li className="language-button">
						<Link className="language-link" to="/">
							En
						</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fr" element={<HomeFr />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
