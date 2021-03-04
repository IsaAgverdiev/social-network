import MyPosts from "./MyPost/MyPosts"
import s from "./Profile.modules.scss"

const Profile = () => {
	return (
		<main className={s.profile}>
			<div className={s.persona}>
				<h1>Persona</h1>
				<div className={s.content}>
				</div>
			</div>
			<MyPosts />
		</main>
	);
}

export default Profile

