import { useTranslation } from "react-i18next";
import MusicSVG from "/icons/music.svg";

export default function Navbar() {
	const { t, i18n } = useTranslation();

	return (
		<nav>
			<img src={MusicSVG} alt="" />
			<h1>{t("navbarTitle")}</h1>
			<button type="button" onClick={() => i18n.changeLanguage("fr")}>
				🇫🇷
			</button>
			<button type="button" onClick={() => i18n.changeLanguage("en")}>
				🇬🇧
			</button>
		</nav>
	);
}
