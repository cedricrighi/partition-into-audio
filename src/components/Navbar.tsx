import { useTranslation } from "react-i18next";
import MusicSVG from "/icons/music.svg";
import "../styles/Navbar.css";

export default function Navbar() {
	const { t, i18n } = useTranslation();

	return (
		<nav className="navbar">
			<img className="navbar-image" src={MusicSVG} alt="" />
			<h1 className="navbar-site-title">{t("navbarTitle")}</h1>
			<div className="translate-buttons">
				<button
					className="translate-button"
					type="button"
					onClick={() => i18n.changeLanguage("fr")}
				>
					🇫🇷
				</button>
				<p>/</p>
				<button
					className="translate-button"
					type="button"
					onClick={() => i18n.changeLanguage("en")}
				>
					🇬🇧
				</button>
			</div>
		</nav>
	);
}
