import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { follow, setUsers, setUsersCout, setCurrentPage, unFollow, checkIsFetching, checkFollowingInProgress } from "../../Redux/users-reducer";
import Users from "./Users";
// import spinner from '../../assets/images/spinner.svg'
// import s from './Users.module.scss'
import Preloader from '../Common/Preloader/preloader';
import { userAPI } from '../../api/api';


class UserContainer extends React.Component {

    componentDidMount() {
        console.log('USERContainer', this.props);
        this.props.checkIsFetching(true)
        userAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
            
                this.props.setUsers(data.items);

                let userTotalCount = data.totalCount / 100;
                this.props.setUsersCout(userTotalCount);

                this.props.checkIsFetching(false)
            })
            // .catch(error => {
            //     console.log('ERROR AXIOS', error.response.data.error);
            //     this.props.checkIsFetching(false);
            // })
    }

    componentDidUpdate() {
        // alert('I\' am componentDidUpdate ')
    }

    onPageChanged = (page) => {
        
        console.log('ONPAGEChange', this.props);
        this.props.setCurrentPage(page)

        this.props.checkIsFetching(true)

        userAPI.getUsers(page,this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.checkIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                users={this.props.users}
                isFollowFetching={this.props.followingInProgress}
                checkFollowingInProgress={this.props.checkFollowingInProgress}
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
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersCout,
        checkIsFetching,
        checkFollowingInProgress
    })(UserContainer)