import s from "./MyPosts.module.scss"
import Post from "./Post/Post"

const MyPosts = (props) => {
	let postsElement = props.postData.map(post => <Post message={post.message} counterLike={post.counterLike} />)

	return (
		<div className={s.MyPosts}>
			<h1 className={s.title}>Add post</h1>
			<label className={s.createNewPost}>
				<textarea className={s.textArea} placeholder="your news...">
				</textarea>
				<button className={s.btnSend} type='submit'>Send</button>
			</label>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts

