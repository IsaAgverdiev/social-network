import s from './Item.module.scss'
import { NavLink } from 'react-router-dom'


const Item = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <NavLink to={path} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
    )
}

export default Item