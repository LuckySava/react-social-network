import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    
    return (
        <div>
            <Profileinfo />
            <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            addNewPost={props.addNewPost}
            updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;