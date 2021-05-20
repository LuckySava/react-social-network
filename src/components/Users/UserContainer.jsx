import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { followAC, setUsersAC, setTotalUserCountAC, setCurrentPageAC, unFollowAC } from "../../Redux/users-reducer";
import Users from "./Users";


class UserContainer extends React.Component {

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
        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            users={this.props.users}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    console.log('DISPATCH', dispatch);

    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCout: (totalUdersCount) => {
            dispatch(setTotalUserCountAC(totalUdersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)