import s from './Dialogs.module.scss'
import Interlocutors from './Interlocutors/Interlocutors'
import Message from './Message/Message'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.item}>
                <Interlocutors dialogsData={props.dialogsPage.dialogsData} />
                <Message messagesData={props.dialogsPage.messagesData}
                    newMessageText={props.dialogsPage.newMessageText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Dialogs