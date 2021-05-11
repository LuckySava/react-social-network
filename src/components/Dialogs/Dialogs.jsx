
import s from './Dialogs.module.scss'
import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'

const Dialogs = (props) => {

    let dialogsElementes = props.dialogsPage.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElementes = props.dialogsPage.messages.map(item => <Message message={item.message} />);


    let textAreaElemen = React.createRef();

    let addMessage = () => {
        props.addNewMessage();
    }

    let changeMessageText = () => {
        let text = textAreaElemen.current.value;
        console.log(text);
        props.updateNewMessageText(text)
    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                <ul>
                    {dialogsElementes}
                </ul>
            </div>

            <div className={s.messages}>
                {messagesElementes}

                <textarea onChange={changeMessageText} value={props.dialogsPage.newMessageText} ref={textAreaElemen} name="" id="" cols="30" rows="10"></textarea>
                <p><button onClick={addMessage}>Add message</button></p>
            </div>

        </div>
    )
}

export default Dialogs;