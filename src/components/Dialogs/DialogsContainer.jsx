import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'


const DialogsContainer = (props) => {

    console.log('DialogsContainer', props);

    let state = props.store.getState().dialogsPage;

    // let textAreaElemen = React.createRef();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let changeMessageText = (text) => {
        props.store.dispatch(updateMessageActionCreator(text))
    }


    return <Dialogs state={state} addMessage={addMessage} changeMessageText={changeMessageText} />
}

export default DialogsContainer;