import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = () => {
    return (
        <div>
            <Profileinfo />
            <MyPosts />
        </div>
    )
}

export default Profile;