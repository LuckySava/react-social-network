import s from './Profile.module.scss';
// import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    console.log('profile', props);
    return (
        <div>
            <Profileinfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;