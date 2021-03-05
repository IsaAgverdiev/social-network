import MyPosts from "./MyPost/MyPosts"
import s from "./Profile.module.scss"

const Profile = () => {
	return (
		<div className={s.profile}>
			<div className={s.persona}>
				<h1>Persona</h1>
				<div className={s.content}>
				</div>
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile

