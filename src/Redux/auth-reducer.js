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
                // isAuth: true,
                // isAuth: true,
            }
        default:
            return state
    }
}

export let setUserData = (id, email, login, isAuth) => ({ type: ACTION.setAuthUserData, data: { id, email, login, isAuth } })

// thunk creator

export const getAuthUserData = () => (dispatch) => {

    return authAPI.me()
        .then(response => {

            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }

        })
}

export const login = (email,password,rememberMe,) => (dispatch) => {

    return authAPI.login(email,password,rememberMe)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch) => {

    return authAPI.logout()
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })
}



export default authReducer;