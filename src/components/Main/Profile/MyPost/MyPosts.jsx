import s from "./MyPosts.module.scss"
import Post from "./Post/Post"

const MyPosts = () => {
	return (
		<div className={s.MyPosts}>
			<h1 className={s.title}>My posts</h1>
			<div className={s.createNewPost}>
				<label>
					<textarea className={s.textArea} placeholder="your news..."></textarea>
					<button className={s.btnSend} type='submit'>Send</button>
				</label>
			</div>
			<div className={s.posts}>
				<Post message="Hi, how are you???" counterLike="15" />
				<Post message="It's my first post!" counterLike="5" />
		
			</div>
		</div>
	);
}

export default MyPosts

