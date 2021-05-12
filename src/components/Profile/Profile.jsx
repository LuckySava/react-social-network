import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    console.log('profile', props);
    return (
        <div>
            <Profileinfo />
            <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
            // addNewPost={props.addNewPost}
            // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;