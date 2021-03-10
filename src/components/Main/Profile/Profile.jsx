import React from 'react'
import MyPosts from "./MyPost/MyPosts"
import User from "./User/User";
import s from "./Profile.module.scss"

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<User />
			<MyPosts postData={props.profilePage.postData}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch} />
		</div>
	);
}

export default Profile

