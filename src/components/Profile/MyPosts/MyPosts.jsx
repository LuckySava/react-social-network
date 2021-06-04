import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = (props) => {

    console.log('myPosts', props);

    let postsElements = props.posts.map(item => <Post message={item.message} likeCounter={item.likesCounter} />);

    // let addPostsText = React.createRef();

    // let addPost = () => {
    //     props.addPost();
    // }

    // let onPostChange = () => {
    //     let text = addPostsText.current.value;
    //     props.updatePostMessage(text)
    // }

    const sendPostMessage = (formData) => {
        props.addPost(formData.postNewMessage)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                {/* <textarea
                onChange={onPostChange}
                value={props.newPostText}
                ref={addPostsText} name="" id="" cols="30" rows="10"></textarea>
                <p>
                    <button onClick={addPost}>Add Post</button>
                </p> */}
                <PostMessageFormRedux onSubmit={sendPostMessage} />
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

const PostMessageForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder='add your new post'
                name='postNewMessage'
                component='textarea'
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