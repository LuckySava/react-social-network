import s from './Profile.module.scss';
// import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    console.log('profile', props);
    return (
        <div>
            <Profileinfo />
            <MyPostsContainer
            store={props.store}
            // posts={props.profilePage.posts}
            // newPostText={props.profilePage.newPostText}
            // dispatch={props.dispatch}
            // addNewPost={props.addNewPost}
            // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;