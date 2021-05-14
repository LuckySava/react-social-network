import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'
import StoreContext from '../../context';


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let changeMessageText = (text) => {
                    store.dispatch(updateMessageActionCreator(text))
                }

                return <Dialogs state={state} addMessage={addMessage} changeMessageText={changeMessageText} />
            }
        }

    </StoreContext.Consumer>
}

export default DialogsContainer;