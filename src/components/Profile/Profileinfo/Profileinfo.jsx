import Preloader from '../../Common/Preloader/preloader';
import defaultImg from '../../../assets/images/avatar.png'
import s from './Profileinfo.module.scss';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './profileStatusWhithHooks';

const Profileinfo = (props) => {

    console.log('Props Profile Info', props);

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            {/* <div className="ava">
                <img className={s.small_img} src="https://picsum.photos/100" alt="" />
            </div> */}

            <div className={s.profile_user}>
                <img className={s.user_img} src={props.profile.photos.large ? props.profile.photos.large : defaultImg} alt="" />
                <div className={s.profile_info}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                
                </div>
            </div>

        </div>
    )
}

export default Profileinfo;
