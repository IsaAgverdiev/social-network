import React from 'react'
import s from "./User.module.scss"

const User = () => {
	return (
		<div className={s.user}>
			<div className={s.userImgWrap}>
				<img className={s.img}
					src="https://i.ytimg.com/vi/q4QufZmuD1A/maxresdefault.jpg"
					alt="UserLogo" />
			</div>
			<div className={s.userInfo}>
				<h1 className={s.userName}>Isak Avetor</h1>
				<p className={s.userStatus}>Hello, I a'm a web-developer</p>
			</div>
		</div>
	);
}

export default User

