import { NavLink } from "react-router-dom";
import s from "./Aside.module.scss"

const Aside = () => {
	return (
		<aside className={s.aside}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink to="/profile"  className={s.link} activeClassName={s.active}>Profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Dialogs</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/news"  className={s.link} activeClassName={s.active}>News</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/music"  className={s.link} activeClassName={s.active}>Music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/setting"  className={s.link} activeClassName={s.active}>Setting</NavLink>
				</li>
			</ul>
		</aside>
	);
}

export default Aside