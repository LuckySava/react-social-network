
import s from './Dialogs.module.scss'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'

const Dialogs = (props) => {



    let dialogsElementes = props.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElementes = props.messages.map(item => <Message message={item.message} />);

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