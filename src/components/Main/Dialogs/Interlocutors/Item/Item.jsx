import React from 'react'
import s from './Item.module.scss'
import { NavLink } from 'react-router-dom'


const Item = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <NavLink to={path} className={s.item} activeClassName={s.active}>
            <div className={s.userImg}>
                <img src={props.userImg} alt="userLogo" className={s.img}/>
            </div>
            <h2 className={s.userName}>{props.name}</h2>
        </NavLink>
    )
}

export default Item