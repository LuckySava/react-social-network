import ACTION from './actions';

let initialState = {
    users: []
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
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            console.log('Error Type UserReducer');
            return state;
    }
}

export let followAC = (userID) => ({ type: ACTION.follow, userID });
export let unFollowAC = (userID) => ({ type: ACTION.unfollow, userID });
export let setUsersAC = (users) => ({ type: ACTION.setUsers, users });


export default userReducer;
