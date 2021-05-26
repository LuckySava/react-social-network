import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
        pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <>
        <div class={s.pages}>
            {
                pages.map(page => {
                   
                    return <span onClick={(e) => props.onPageChanged(page)} className={props.currentPage === page && s.selectedPage}>{page}</span>
                })
            }
        </div>
        <div className={s.users}>
            {
                props.users.map(user => {
                    return <div key={user.id} className={s.user}>

                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + user.id}><img src={user.photos.small ? user.photos.small : userPhoto} alt={user.fullName} /></NavLink>
                            {user.followed
                                ? <button disabled={props.isFollowFetching.some(id => id === user.id)} onClick={() => {

                                    props.unfollow(user.id)

                                }} className={s.follow_btn}>Unfollow</button>
                                : <button disabled={props.isFollowFetching.some(id => id === user.id)} onClick={() => {

                                    props.follow(user.id)
                                    
                                    }} className={s.follow_btn}>Follow</button>}
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
}

export default Users;