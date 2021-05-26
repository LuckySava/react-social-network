import { userAPI } from '../api/api';
import ACTION from './actions';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTION.follow:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case ACTION.unfollow:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case ACTION.setUsers:
            console.log('ACTION USERS', action.users);
            return {
                ...state,
                users: action.users
            }

        case ACTION.setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case ACTION.setUsersCount:
            return {
                ...state,
                totalUsersCount: action.totalUserCount
            }
        case ACTION.toggleIsFetching:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case ACTION.isFollowFetching:
            return {
                ...state,

                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }


        default:
            console.log('Error Type UserReducer');
            return state;
    }
}

export const followSuccess = (userID) => ({ type: ACTION.follow, userID });
export const unFollowSuccess = (userID) => ({ type: ACTION.unfollow, userID });
export const setUsers = (users) => ({ type: ACTION.setUsers, users });
export const setCurrentPage = (currentPage) => ({ type: ACTION.setCurrentPage, currentPage });
export const setUsersCout = (totalUserCount) => ({ type: ACTION.setUsersCount, totalUserCount });
export const checkIsFetching = (isFetching) => ({ type: ACTION.toggleIsFetching, isFetching });
export const checkFollowingInProgress = (isFetching, userId) => ({ type: ACTION.isFollowFetching, isFetching, userId });


// Create Thunk with ThunkCreator
export const getUser = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(checkIsFetching(true))

        userAPI.getUsers(currentPage, pageSize)
            .then(data => {

                dispatch(setUsers(data.items));

                let userTotalCount = data.totalCount / 100;
                dispatch(setUsersCout(userTotalCount));

                dispatch(checkIsFetching(false))

                dispatch(setCurrentPage(currentPage));

            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(checkFollowingInProgress(true,userId))

        userAPI.unfollowUser(userId)
        .then(response => {
            if(response.data.resultCode == 0) {
                dispatch(unFollowSuccess(userId))
            }

            dispatch(checkFollowingInProgress(false, userId));

        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(checkFollowingInProgress(true,userId))

        userAPI.followUser(userId)
        .then(response => {
            if(response.data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }

            dispatch(checkFollowingInProgress(false, userId));

        })
    }
}

export default userReducer;
