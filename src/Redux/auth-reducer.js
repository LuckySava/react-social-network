import { authAPI } from '../api/api';
import ACTION from './actions';
import { stopSubmit } from 'redux-form';

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

export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe,) => async (dispatch) => {


    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Email is not valid';
        let action = stopSubmit('login', { _error: errorMessage });
        dispatch(action)
    }

}

export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()


    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }

}



export default authReducer;