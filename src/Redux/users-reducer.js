import ACTION from './actions';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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


        default:
            console.log('Error Type UserReducer');
            return state;
    }
}

export let followAC = (userID) => ({ type: ACTION.follow, userID });
export let unFollowAC = (userID) => ({ type: ACTION.unfollow, userID });
export let setUsersAC = (users) => ({ type: ACTION.setUsers, users });
export let setCurrentPageAC = (currentPage) => ({ type: ACTION.setCurrentPage, currentPage });
export let setTotalUserCountAC = (totalUserCount) => ({ type: ACTION.setUsersCount, totalUserCount });


export default userReducer;
