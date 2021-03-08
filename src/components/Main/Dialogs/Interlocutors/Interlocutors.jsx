import React from 'react'
import s from './Interlocutors.module.scss'
import Item from './Item/Item'


const Interlocutors = (props) => {
    let interlocutorsElement = props.dialogsData.map(interlocutor => <Item name={interlocutor.name} id={interlocutor.id} userImg={interlocutor.userImg} />);

    return (
        <aside className={s.interlocutors}>
            {interlocutorsElement}
        </aside>
    )
}

export default Interlocutors