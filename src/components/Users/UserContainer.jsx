import React from 'react';
import { connect } from "react-redux";
import { getUser, follow, unfollow, checkFollowingInProgress } from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from '../Common/Preloader/preloader';

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {

        this.props.getUser(page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                isFollowFetching={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     console.log('DISPATCH', dispatch);

//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unFollow: (userID) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersCout: (totalUdersCount) => {
//             dispatch(setTotalUserCountAC(totalUdersCount))
//         },
//         checkIsFetching: (fetching) => {
//             dispatch(checkIsFetchingAC(fetching))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        checkFollowingInProgress,
        getUser,
    })(UserContainer)