import s from "./Aside.modules.scss"

const Aside = () => {
	return (
		<aside className={s.aside}>
					<ul className={s.list}>
						<li className={s.item}>
							<a className={s.link} href="">Profile</a>
						</li>
						<li className={s.item}>
							<a className={s.link} href="">Messages</a>
						</li>
						<li className={s.item}>
							<a className={s.link} href="">News</a>
						</li>
						<li className={s.item}>
							<a className={s.link} href="">Music</a>
						</li>
						<li className={s.item}>
							<a className={s.link} href="">Setting</a>
						</li>
					</ul>
		</aside>
	);
}

export default Aside