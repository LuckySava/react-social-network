import ACTIONS from "./actions";

const profileReducer = (state, action) => {

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


export default profileReducer;