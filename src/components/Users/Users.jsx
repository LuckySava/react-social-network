import React from 'react';
import s from './Users.module.scss';
import axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${this.props.totalUsersCount}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

                let userTotalCount = response.data.totalCount / 100;
                this.props.setUsersCout(userTotalCount);
            })
    }

    componentDidUpdate() {
        // alert('I\' am componentDidUpdate ')
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)

        console.log('PAGE', page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize),
            pages = [];

            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }

        return (
            <>
                <div class={s.pages}>
                    {
                        pages.map(page => {
                           return <span onClick={(e)=> this.onPageChanged(page)} className={this.props.currentPage === page && s.selectedPage}>{page}</span>
                        })
                    }
                </div>
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