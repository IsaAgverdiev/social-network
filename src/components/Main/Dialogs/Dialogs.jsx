import s from './Dialogs.module.scss'
import Interlocutors from './Interlocutors/Interlocutors'
import Message from './Message/Message'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.item}>
                <Interlocutors dialogsData={props.dialogsData}/>
                <Message messagesData={props.messagesData}/>
            </div>
        </div>
    )
}

export default Dialogs