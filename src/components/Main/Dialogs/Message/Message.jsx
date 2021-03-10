import React from 'react'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../Redux/dialogs-reducer';
import Item from './Item/Item'
import s from './Message.module.scss'

const Message = (props) => {
	let messagesElement = props.messagesData.map(message => <Item message={message.message} />);

	let createMessageElement = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator())
	}

	let onMessageChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewMessageActionCreator(text))
	}

	return (
		<article className={s.message}>
			<div className={s.items}>
				{messagesElement}
			</div>
			<label className={s.messageFooter}>
				<textarea onChange={onMessageChange}
					className={s.textArea}
					value={props.newMessageText} rows="1"
					placeholder="Write a message..."
				/>
				<button onClick={addMessage} className={s.btnSend}>Send</button>
			</label>
		</article>
	)
}

export default Message