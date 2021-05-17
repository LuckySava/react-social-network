import s from './Users.module.scss';

const Users = (props) => {
    console.log('length-1', props.users.length);
    console.log('USER PROPS', props);

    if(props.users.length == 0) {
        props.setUsers([
            { id: 1, followed: false, userPhoto: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 3, followed: false, userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png', fullName: 'Sashko', status: 'I am a boss from Ukraine', location: { city: 'Poltava', country: 'Ukraine' } },
            { id: 2, followed: true, fullName: 'Oleg', userPhoto: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', status: 'I am a boss from Poland', location: { city: 'Poznan', country: 'Poland' } },
        ])
    }

    console.log('length-2', props.users.length);
    return (
        <>
            <div className={s.users}>
                {
                    props.users.map(user => {
                        return <div key={user.id} className={s.user}>

                            <div className={s.avatar}>
                                <img src={user.userPhoto} alt={user.fullName} />
                                {user.followed ? <button onClick={() => props.unFollow(user.id)} className={s.follow_btn}>Unfollow</button> : <button onClick={() => props.follow(user.id)} className={s.follow_btn}>Follow</button>}
                            </div>

                            <div className={s.user_info}>

                                <div className={s.user_info_left}>
                                    <h3>{user.fullName}</h3>
                                    <div className={s.user_status}>{user.status}</div>
                                </div>

                                <div className={s.user_info_right}>
                                    <p>{user.location.city}</p>
                                    <p>{user.location.country}</p>
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