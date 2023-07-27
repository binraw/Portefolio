import "./style/style.css";
import Home from "./pages/Home/Home";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<div>
			<AppRouter />

			<Home />
		</div>
	);
}

export default App;
