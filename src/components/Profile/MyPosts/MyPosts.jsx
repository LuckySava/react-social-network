import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.scss';
import Post from './Post/Posts';
import {requiredFields, maxLengthCreator} from '../../../utils/validators/validators';
import { Textarea } from '../../Common/Preloader/FormsControlls/FormsControls';

const maxLengthCreator10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(item => <Post message={item.message} likeCounter={item.likesCounter} />);

    const sendPostMessage = (formData) => {
        props.addPost(formData.postNewMessage)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <PostMessageFormRedux onSubmit={sendPostMessage} />
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
})

const PostMessageForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            
            <Field
                placeholder='add your new post'
                name='postNewMessage'
                component={Textarea}
                validate={[requiredFields, maxLengthCreator10]}
            />
            <p>
                <button>Add Post</button>
            </p>
        </form>
    )
}


const PostMessageFormRedux = reduxForm({
    form: 'postMessageForm'
})(PostMessageForm)

export default MyPosts;