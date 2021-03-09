import React from 'react'
import s from "./MyPosts.module.scss"

import Post from "./Post/Post"

const MyPosts = (props) => {
	let postsElement = props.postData.map(post => <Post message={post.message} counterLike={post.counterLike} userName={post.userName} />);


	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	
	return (
		<div className={s.MyPosts}>
			<h1 className={s.title}>Create post</h1>
			<label className={s.createNewPost}>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} className={s.textArea} placeholder="your news..." />
				<button className={s.btnSend} onClick={addPost}>Send</button>
			</label>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts

