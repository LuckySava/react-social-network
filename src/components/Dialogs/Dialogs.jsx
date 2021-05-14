
import s from './Dialogs.module.scss'
import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'


const Dialogs = (props) => {

    console.log('Dialogs', props);

    let dialogsElementes = props.state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElementes = props.state.messages.map(item => <Message message={item.message} />);


    // let textAreaElemen = React.createRef();

    let addMessage = () => {
        props.addMessage();
        // props.dispatch(addMessageActionCreator());
    }

    let changeMessageText = (e) => {
        let text = e.target.value;
        props.changeMessageText(text)
        // props.dispatch(updateMessageActionCreator(text))
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
                <div className={s.messageField}>
                    <textarea
                    placeholder='Enter your msg'
                    onChange={changeMessageText}
                    value={props.state.newMessageText}
                    name="" id="" cols="30" rows="10" />
                    <p><button onClick={addMessage}>Add message</button></p>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;