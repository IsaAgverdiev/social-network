import React from 'react'
import s from "./MyPosts.module.scss"

import Post from "./Post/Post"

const MyPosts = (props) => {
	let postsElement = props.postData.map(post => <Post message={post.message} counterLike={post.counterLike} userName={post.userName} />);


	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text)
		newPostElement.current.value = '';
	}
	
	return (
		<div className={s.MyPosts}>
			<h1 className={s.title}>Create post</h1>
			<label className={s.createNewPost}>
				<textarea ref={newPostElement} className={s.textArea} placeholder="your news..."></textarea>
				<button className={s.btnSend} onClick={addPost}>Send</button>
			</label>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts

