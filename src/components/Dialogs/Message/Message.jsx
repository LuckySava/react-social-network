import s from './Message.module.scss'

const Message = (props) => {
    console.log('message', props);

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;
