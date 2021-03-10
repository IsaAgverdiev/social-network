import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../Redux/profile-reducer';
import s from "./MyPosts.module.scss"
import Post from "./Post/Post"


const MyPosts = (props) => {
	let postsElement = props.postData.map(post => <Post message={post.message} counterLike={post.counterLike} userName={post.userName} />);


	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewPostActionCreator(text));
	}

	return (
		<div className={s.MyPosts}>
			<h1 className={s.title}>Create post</h1>
			<label className={s.createNewPost}>
				<textarea onChange={onPostChange}
					value={props.newPostText}
					className={s.textArea}
					placeholder="your news..."
				/>
				<button className={s.btnSend} onClick={addPost}>Send</button>
			</label>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts

