import s from "./Header.module.scss"
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.inner}>
				<NavLink to="/profile" className={s.link}>
					<div className={s.logo}>
						Logo
					</div>
				</NavLink>
			</div>
		</header>
	);
}

export default Header;