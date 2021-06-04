import React from 'react';
import { connect } from 'react-redux';
// import StoreContext from '../../../context';
import { addPostActionCreator, postChangeActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newProfilePost) => dispatch(addPostActionCreator(newProfilePost)),
        // updatePostMessage: (text) => {
        //     return dispatch(postChangeActionCreator(text))
        // }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;