import { profileAPI, userAPI } from "../api/api";
import ACTIONS from "./actions";

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you',
            likesCounter: 15,
        },
        {
            id: 2,
            message: 'it\'s my first post here',
            likesCounter: 42,
        },
        {
            id: 31,
            message: 'whorray',
            likesCounter: 8,
        },
        {
            id: 2,
            message: 'yeap!!!',
            likesCounter: 37,
        },
    ],
    // newPostText: 'it-kamasutra.com',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONS.addPost: 
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newProfilePost, likesCounter: 0}],
                newPostText: ''
            };

        // case ACTIONS.updatePost: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        // }
        case ACTIONS.getStatus: {
            return {
                ...state,
                status: action.status
            }
        }
        case ACTIONS.setUserProfile: {
            return {
                ...state,
                profile: action.profile
                
            }
        }

        default:
            console.log('Error Action Type ProfileReducer');
            return state;
    }

}

// Action Creators

export const setUserProfile = (profile) => ({type: ACTIONS.setUserProfile, profile})
export const addPostActionCreator = (newProfilePost) => ({ type: ACTIONS.addPost, newProfilePost });
export const postChangeActionCreator = (text) => ({type: ACTIONS.updatePost,newText: text});
export const setStatus = (status) => ({type: ACTIONS.getStatus, status: status});

// thunk creator

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getStatus = (userId) =>(dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}



export default profileReducer;