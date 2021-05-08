import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.scss';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <li className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {
            id: 1,
            name: 'Dimych'
        },
        {
            id: 2,
            name: 'Olga'
        },
        {
            id: 3,
            name: 'Ira'
        },
        {
            id: 4,
            name: 'Sveta'
        },
        {
            id: 5,
            name: 'Valera'
        },
        {
            id: 6,
            name: 'Nina'
        }
    ];

    let messages = [
        {
            id: 1,
            message: 'Hi hello bro'
        },
        {
            id: 2,
            message: 'Hi there'
        },
        {
            id: 3,
            message: 'How are you'
        },
        {
            id: 4,
            message: 'Yo men'
        },
        {
            id: 5,
            message: 'Wow normal like'
        },
        {
            id: 6,
            name: 'Nina'
        }
    ];

    let dialogsElementes = dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElementes = messages.map(item => <Message message={item.message} />);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                <ul>
                    {dialogsElementes}
                </ul>
            </div>

            <div className={s.messages}>
                {messagesElementes}
            </div>

        </div>
    )
}

export default Dialogs;