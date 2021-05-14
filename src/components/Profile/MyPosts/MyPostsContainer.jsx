import React from 'react';
import StoreContext from '../../../context';
import { addPostActionCreator, postChangeActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {


                let state = store.getState();


                let addPost = () => {
                    // props.dispatch(addPostActionCreator())
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    // props.dispatch(postChangeActionCreator(text))
                    store.dispatch(postChangeActionCreator(text))

                }

                return <MyPosts
                    addPost={addPost}
                    updatePostMessage={onPostChange}
                    newPostText={state.profilePage.newPostText}
                    posts={state.profilePage.posts} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;