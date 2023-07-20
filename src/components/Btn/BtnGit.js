import logogit from "../../assets/logogit.svg";

function BtnGit() {
	return (
		<button className="btn-git">
			<a href="https://github.com/binraw">
				<img src={logogit} alt="logo github" />
			</a>
		</button>
	);
}
export default BtnGit;
