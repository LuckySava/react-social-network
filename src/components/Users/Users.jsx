import axios from 'axios';
import s from './Users.module.scss';
import userPhoto from './../../assets/images/avatar.png'

const Users = (props) => {

    console.log('length-1', props.users.length);
    console.log('USER PROPS', props);

    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            console.log(response);
            props.setUsers(response.data.items)
        })
    }

    console.log('length-2', props.users.length);
    return (
        <>
            <div className={s.users}>
                {
                    props.users.map(user => {
                        return <div key={user.id} className={s.user}>

                            <div className={s.avatar}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} alt={user.fullName} />
                                {user.followed ? <button onClick={() => props.unFollow(user.id)} className={s.follow_btn}>Unfollow</button> : <button onClick={() => props.follow(user.id)} className={s.follow_btn}>Follow</button>}
                            </div>

                            <div className={s.user_info}>

                                <div className={s.user_info_left}>
                                    <h3>{user.name}</h3>
                                    <div className={s.user_status}>{user.status}</div>
                                </div>

                                <div className={s.user_info_right}>
                                    {/* <p>{user.location.city}</p>
                                    <p>{user.location.country}</p> */}
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>

            <p className={s.show_more_wrap}>
                <button className={s.show_more_btn}>Show More</button>
            </p>

        </>

    )

}

export default Users;