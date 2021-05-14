import React from 'react';
import { addPostActionCreator, postChangeActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    console.log('myPostsContainer', props);

    let addPost = () => {
        // props.dispatch(addPostActionCreator())
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        // props.dispatch(postChangeActionCreator(text))
        props.store.dispatch(postChangeActionCreator(text))
        
    }

    return (
        <MyPosts addPost={addPost} updatePostMessage={onPostChange} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} />
    )
}

export default MyPostsContainer;