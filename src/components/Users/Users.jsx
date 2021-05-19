import React from 'react';
import s from './Users.module.scss';
import axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class Users extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <>
                <div className={s.users}>
                    {
                        this.props.users.map(user => {
                            return <div key={user.id} className={s.user}>

                                <div className={s.avatar}>
                                    <img src={user.photos.small ? user.photos.small : userPhoto} alt={user.fullName} />
                                    {user.followed
                                    ? <button onClick={() => this.props.unFollow(user.id)} className={s.follow_btn}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(user.id)} className={s.follow_btn}>Follow</button>}
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
}

export default Users;