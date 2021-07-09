import { authAPI } from '../api/api';
import ACTION from './actions';
import {stopSubmit} from 'redux-form';
import { getAuthUserData } from './auth-reducer';

console.log('ACTION', ACTION.setInitialized);

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.setInitialized:

            return {
                ...state,
                initialized : true,
            }
        default:
            return state
    }
}

export let initializingSuccess = () => ({ type: ACTION.setInitialized })

// thunk creator

export const initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(getAuthUserData());

    Promise.all([dispatchResult]).then(() => {
        dispatch(initializingSuccess());
    })

}


export default appReducer;