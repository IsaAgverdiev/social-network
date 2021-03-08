import React from 'react'
import s from "./Post.module.scss"

const Post = (props) => {
	return (
		<div className={s.item}>
			<div className={s.header}>
				<div className={s.imgWrap}>
					<img className={s.img}
						src="https://i.ytimg.com/vi/q4QufZmuD1A/maxresdefault.jpg"
						alt="userLogo" />
				</div>
				<h2 className={s.userName}>{props.userName}</h2>
			</div>
			<div className={s.body}>
				<p className={s.text}>{props.message}</p>
			</div>
			<span className={s.likes}>{props.counterLike} likes</span>
		</div >
	);
}

export default Post

