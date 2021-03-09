import React from 'react'
import Item from './Item/Item'
import s from './Message.module.scss'


const Message = (props) => {
	let messagesElement = props.messagesData.map(message => <Item message={message.message} />);

	let createMessageElement = React.createRef();

	let addMessage = () => {
		props.addMessage()
	}

	let onMessageChange = () => {
		let text = createMessageElement.current.value;
		props.updateNewMessageText(text)
	}

	return (
		<article className={s.message}>
			<div className={s.items}>
				{messagesElement}
			</div>
			<label className={s.messageFooter}>
				<textarea ref={createMessageElement} onChange={onMessageChange} value={props.newMessageText} rows="1" className={s.textArea} placeholder="Write a message..." />
				<button onClick={addMessage} className={s.btnSend}>Send</button>
			</label>
		</article>
	)
}

export default Message