
import s from './Dialogs.module.scss'
import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/state'


const Dialogs = (props) => {

    console.log('Dialogs', props);

    let state = props.store.getState().dialogsPage;

    let dialogsElementes = state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElementes = state.messages.map(item => <Message message={item.message} />);


    // let textAreaElemen = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let changeMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreator(text))
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
                    value={state.newMessageText}
                    // ref={textAreaElemen}
                    name="" id="" cols="30" rows="10" />
                    <p><button onClick={addMessage}>Add message</button></p>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;