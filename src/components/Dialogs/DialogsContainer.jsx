import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../Redux/dialogs-reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


