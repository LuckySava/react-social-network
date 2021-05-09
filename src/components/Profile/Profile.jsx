import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    return (
        <div>
            <Profileinfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;