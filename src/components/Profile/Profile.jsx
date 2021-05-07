import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <p>Ava + Text</p>
        <div className="ava">
            <img className={s.small_img} src="https://picsum.photos/100" alt="" />
        </div>

        <MyPosts />
    </div>
    )
}

export default Profile;