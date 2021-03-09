import s from './Dialogs.module.scss'
import Interlocutors from './Interlocutors/Interlocutors'
import Message from './Message/Message'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.item}>
                <Interlocutors dialogsData={props.dialogsPage.dialogsData} />
                <Message messagesData={props.dialogsPage.messagesData}
                    addMessage={props.addMessage}
                    newMessageText={props.dialogsPage.newMessageText}
                    updateNewMessageText={props.updateNewMessageText}
                />
            </div>
        </div>
    )
}

export default Dialogs