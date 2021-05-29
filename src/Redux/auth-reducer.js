import { authAPI } from '../api/api';
import ACTION from './actions'

console.log('ACTION', ACTION.setAuthUserData);

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.setAuthUserData:

            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export let setUserData = (id, email, login) => ({ type: ACTION.setAuthUserData, data: { id, email, login } })

// thunk creator

export const getAuthUserData = () => (dispatch) => {

    return authAPI.me()
        .then(response => {

            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login));
            }

        })
}

export default authReducer;