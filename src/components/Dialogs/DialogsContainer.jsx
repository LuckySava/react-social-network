import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
           return dispatch(addMessageActionCreator())
        },
        changeMessageText: (text) => {
           return dispatch(updateMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;