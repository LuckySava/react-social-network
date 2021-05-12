import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Posts';
import { addPostActionCreator, postChangeActionCreator } from '../../../Redux/state';

const MyPosts = (props) => {

    console.log('myPosts', props);

    let postsElements = props.posts.map(item => <Post message={item.message} likeCounter={item.likesCounter} />);

    let addPostsText = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = addPostsText.current.value;
        props.dispatch(postChangeActionCreator(text))
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={addPostsText} name="" id="" cols="30" rows="10"></textarea>
                <p>
                    <button onClick={addPost}>Add Post</button>
                </p>
            </div>

            <div className={s.posts}>
                {  postsElements }
            </div>

        </div>
    )
}

export default MyPosts;