
import s from './Dialogs.module.scss'
import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'

const Dialogs = (props) => {

    let dialogsElementes = props.state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElementes = props.state.messages.map(item => <Message message={item.message} />);

    let textAreaElemen = React.createRef();
    let addMessage = () => {
        let text = textAreaElemen.current.value;
        console.log(text);
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

                <textarea ref={textAreaElemen} name="" id="" cols="30" rows="10"></textarea>
                <p><button onClick={addMessage}>Add message</button></p>
            </div>

        </div>
    )
}

export default Dialogs;