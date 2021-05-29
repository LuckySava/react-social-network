import s from './Profile.module.scss';
// import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router';

const Profile = (props) => {
    console.log('profile', props);

    if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <Profileinfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;