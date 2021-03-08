import React from 'react'
import s from './Item.module.scss'


const Item = (props) => {
    return (
        <div className={s.item}>{props.message}</div>
    )
}

export default Item