const ACTIONS = {
    'addPost': 'ADD-POST',
    'addMessage': 'ADD-MESSAGE',
    'updatePost': 'UPDATE-POST',
    'updateMessage': 'UPDATE-MESSAGE',
}

let store = {
    _state: {
        dialogsPage: {
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
            newMessageText: '44',
        },
        profilePage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    avatar: 'https://image.flaticon.com/icons/png/512/62/62839.png',
                    name: 'Ivan'
                },
                {
                    id: 2,
                    avatar: 'https://cdn.icon-icons.com/icons2/933/PNG/512/emoticon-with-happy-face_icon-icons.com_72768.png',
                    name: 'Olga'
                },
                {
                    id: 3,
                    avatar: 'https://cdn.icon-icons.com/icons2/1862/PNG/512/childheadwithsmilingface_118426.png',
                    name: 'Lana'
                },
                {
                    id: 4,
                    avatar: 'https://image.flaticon.com/icons/png/512/62/62839.png',
                    name: 'nVera'
                }
            ]
        }
    },

    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ACTIONS.addPost:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCounter: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state)
                break;
            case ACTIONS.addMessage:
                let newMessage = {
                    id: 1,
                    message: this._state.dialogsPage.newMessageText
                };

                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';

                this._callSubscriber(this._state)
                break;
            case ACTIONS.updatePost:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state)
                break;
            case ACTIONS.updateMessage:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state)
                break;
            default:
                alert("Invalid type");
        }
    }
}

export const addPostActionCreator = () => ({ type: ACTIONS.addPost });
export const postChangeActionCreator = (text) => ({
    type: ACTIONS.updatePost,
    newText: text
});
export const addMessageActionCreator = () => ({ type: ACTIONS.addMessage });
export const updateMessageActionCreator = (text) => ({
    type: ACTIONS.updateMessage,
    newText: text
});

export default store;