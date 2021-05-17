import ACTIONS from "./actions";

let ininialState = {
    messages: [
        {
            id: 1,
            message: 'Hi hello bro'
        },
        {
            id: 2,
            message: 'Hi there'
        },
        {
            id: 3,
            message: 'How are you'
        },
        {
            id: 4,
            message: 'Yo men'
        },

        {
            id: 5,
            message: 'Wow normal like'
        },

        {
            id: 6,
            message: 'what\'s going on?'
        }
    ],
    dialogs: [
        {
            id: 1,
            name: 'Dimych'
        },
        {
            id: 2,
            name: 'Olga'
        },
        {
            id: 3,
            name: 'Ira'
        },
        {
            id: 4,
            name: 'Sveta'
        },
        {
            id: 5,
            name: 'Valera'
        },
        {
            id: 6,
            name: 'Lana'
        }
    ],
    newMessageText: 'type something',
}

const dialogReducer = (state = ininialState, action) => {

    // let stateCopy;

    switch (action.type) {
        case ACTIONS.addMessage:

        let body = state.newMessageText;

            return { 
                ...state,
                messages: [...state.messages,  {id: 1,message: body}],
                newMessageText : '',
             };

        case ACTIONS.updateMessage:
            return {
                ...state,
                newMessageText: action.newText
             };

        default:
            console.log('Error Action Type dialogReducer');
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: ACTIONS.addMessage });
export const updateMessageActionCreator = (text) => ({
    type: ACTIONS.updateMessage,
    newText: text
});


export default dialogReducer;