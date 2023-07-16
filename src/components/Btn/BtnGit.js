import logogit from "../../assets/logogit.svg";

function BtnGit() {
	return (
		<button className="btn-git">
			<img src={logogit} alt="logo github" />
			<a href="https://github.com/binraw">GitHub</a>
		</button>
	);
}
export default BtnGit;
