import s from './Profile.module.scss';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    console.log('profile', props);

    // if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;