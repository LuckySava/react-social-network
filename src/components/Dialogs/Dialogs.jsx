
import s from './Dialogs.module.scss'
import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../Common/Preloader/FormsControlls/FormsControls'
import { maxLengthCreator, requiredFields } from '../../utils/validators/validators'

const maxLengthCreator25 = maxLengthCreator(25);

const Dialogs = (props) => {

    console.log('Dialogs', props);

    let dialogsElementes = props.dialogsPage.dialogs.map(item => <DialogItem key={item.id} name={item.name} id={item.id} />);
    let messagesElementes = props.dialogsPage.messages.map(item => <Message key={item.id} message={item.message} />);

    // let addMessage = () => {
    //     props.addMessage();
    // }

    // let changeMessageText = (e) => {
    //     let text = e.target.value;
    //     props.changeMessageText(text)
    // }

    let addNewMessage = (formData) => {
        console.log(formData);
        props.addMessage(formData.newMessageBodyDialog);
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
                    <DialogMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>

        </div>
    )
}

const DialogMessageForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <Field
            placeholder='Enter your msg'
            component={Textarea}
            validate={[requiredFields, maxLengthCreator25]}
            name="newMessageBodyDialog" />
        <p><button>Add message</button></p>
    </form>
    )
}

const DialogMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(DialogMessageForm)

export default Dialogs;