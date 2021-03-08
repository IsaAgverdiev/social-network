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
                    postData={props.state.profilePage.postData} 
                    addPost={props.addPost}
                    />} />
            <Route path='/dialogs'
                render={() => <Dialogs
                    messagesData={props.state.dialogsPage.messagesData}
                    addMessage={props.addMessage}
                    dialogsData={props.state.dialogsPage.dialogsData} />} />
        </div>
    )
}

export default Main
