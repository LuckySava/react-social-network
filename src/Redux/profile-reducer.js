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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONS.addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounter: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case ACTIONS.updatePost:
            state.newPostText = action.newText;
            break;
        default:
            console.log('Error Action Type');
    }

    return state;
}


export const addPostActionCreator = () => ({ type: ACTIONS.addPost });
export const postChangeActionCreator = (text) => ({
    type: ACTIONS.updatePost,
    newText: text
});


export default profileReducer;