import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
        pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    console.log('USERS PAGES', props);


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
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "669bffb1-253a-4396-8da1-6301d4b07c9a"
                                        }
                                    }
                                    
                                    )
                                    .then(response => {
                                        if(response.data.resultCode == 0) {
                                            props.unFollow(user.id)
                                        }
                                    })


                                }} className={s.follow_btn}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "669bffb1-253a-4396-8da1-6301d4b07c9a"
                                        }
                                    })
                                    .then(response => {
                                        if(response.data.resultCode == 0) {
                                            props.follow(user.id);
                                        }
                                    })


                                    // .catch(error => {
                                    //     console.log('ERROR AXIOS', error.response.data.messages);
                                    // })
                                
                                    
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