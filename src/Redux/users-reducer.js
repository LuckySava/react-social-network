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

export let follow = (userID) => ({ type: ACTION.follow, userID });
export let unFollow = (userID) => ({ type: ACTION.unfollow, userID });
export let setUsers = (users) => ({ type: ACTION.setUsers, users });
export let setCurrentPage = (currentPage) => ({ type: ACTION.setCurrentPage, currentPage });
export let setUsersCout = (totalUserCount) => ({ type: ACTION.setUsersCount, totalUserCount });
export let checkIsFetching = (isFetching) => ({ type: ACTION.toggleIsFetching, isFetching });
export let checkFollowingInProgress = (isFetching, userId) => ({ type: ACTION.isFollowFetching, isFetching, userId });


export default userReducer;
