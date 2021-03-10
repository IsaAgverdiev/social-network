import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs";
import s from "./Main.module.scss"
import React from 'react'
import { Route } from "react-router-dom";

const Main = (props) => {
	return (
		<div className={s.main}>
			<Route path='/profile'
				render={() => <Profile
					profilePage={props.state.profilePage}
					dispatch={props.dispatch}
				/>} />
			<Route path='/dialogs'
				render={() => <Dialogs
					dialogsPage={props.state.dialogsPage}
					dispatch={props.dispatch}
				/>} />
		</div>
	)
}

export default Main
