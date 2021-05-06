import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
        <img className={s.full_img} src="https://img.wallpapersafari.com/desktop/1024/576/68/47/RArkmj.jpg" alt="" />

        <div className="ava">
            <img className={s.small_img} src="https://picsum.photos/100" alt="" />
        </div>

        <MyPosts />
    </div>
    )
}

export default Profile;