import ACTIONS from "./actions";

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.addMessage:
            let newMessage = {
                id: 1,
                message: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case ACTIONS.updateMessage:
            state.newMessageText = action.newText;
    
            break;
        default:
            console.log('Error Action Type');
    }

    return state;
}

export const addMessageActionCreator = () => ({ type: ACTIONS.addMessage });
export const updateMessageActionCreator = (text) => ({
    type: ACTIONS.updateMessage,
    newText: text
});


export default dialogReducer;