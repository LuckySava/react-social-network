
import s from './Dialogs.module.scss'
import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'
import { Redirect } from 'react-router'


const Dialogs = (props) => {

    console.log('Dialogs', props);

    let dialogsElementes = props.dialogsPage.dialogs.map(item => <DialogItem key={item.id} name={item.name} id={item.id} />);
    let messagesElementes = props.dialogsPage.messages.map(item => <Message key={item.id} message={item.message} />);

    let addMessage = () => {
        props.addMessage();
    }

    let changeMessageText = (e) => {
        let text = e.target.value;
        props.changeMessageText(text)
    }

    // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                <ul>
                    {dialogsElementes}
                </ul>
            </div>

            <div className={s.messages}>
                {messagesElementes}
                <div className={s.messageField}>
                    <textarea
                    placeholder='Enter your msg'
                    onChange={changeMessageText}
                    value={props.dialogsPage.newMessageText}
                    name="" id="" cols="30" rows="10" />
                    <p><button onClick={addMessage}>Add message</button></p>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;