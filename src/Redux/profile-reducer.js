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
    newPostText: 'it-kamasutra.com',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONS.addPost: 
        
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCounter: 0}],
                newPostText: ''
            };

        case ACTIONS.updatePost: {
            return {
                ...state,
                newPostText: action.newText
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

export const setUserProfile = (profile) => ({type: ACTIONS.setUserProfile, profile})
export const addPostActionCreator = () => ({ type: ACTIONS.addPost });
export const postChangeActionCreator = (text) => ({type: ACTIONS.updatePost,newText: text});


export default profileReducer;