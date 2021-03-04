import s from "./Header.modules.scss"

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.inner}>
				<a href="#" className={s.link}>
					<div className={s.logo}>
						Logo
					</div>
				</a>
			</div>
		</header>
	);
}

export default Header;