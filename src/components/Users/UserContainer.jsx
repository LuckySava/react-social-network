import { connect } from "react-redux";
import { followAC, setUsersAC, setTotalUserCountAC, setCurrentPageAC, unFollowAC } from "../../Redux/users-reducer";
import Users from "./Users";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)