import React from 'react'
import Item from './Item/Item'
import s from './Message.module.scss'


const Message = (props) => {
    let messagesElement = props.messagesData.map(message => <Item message={message.message} />);

    let createMessageElement = React.createRef();

    let addMessage = () => {
        let text = createMessageElement.current.value;
        props.addMessage(text)
        createMessageElement.current.value = '';
    }

    return (
        <article className={s.message}>
            <div class={s.items}>
                {messagesElement}
            </div>
            <label className={s.messageFooter}>
                <textarea ref={createMessageElement} rows="1" className={s.textArea} placeholder="Write a message..."></textarea>
                <button onClick={addMessage} className={s.btnSend}>Send</button>
            </label>
        </article>
    )
}

export default Message