import s from "./Post.module.scss"

const Post = (props) => {
	return (
		<div className={s.item}>
			<p className={s.text}>{props.message}</p>
			<span className={s.likes}>{props.counterLike} likes</span>
		</div>
	);
}

export default Post

