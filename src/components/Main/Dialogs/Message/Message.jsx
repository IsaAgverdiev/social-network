import Item from './Item/Item'
import s from './Message.module.scss'


const Message = (props) => {
    let messagesElement = props.messagesData.map( message => <Item message={message.message} />);

    return (
        <article className={s.message}>
            {messagesElement} 
        </article>
    )
}

export default Message