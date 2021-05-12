// import { rerenderAllTree } from "../render"

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
            _newMessageText: '222',
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

    getState(){
        return this._state;
    },

    addNewMessage() {
        let newMessage = {
            id: 1,
            message: this._state.dialogsPage.newMessageText
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';

        this.callSubscriber(this._state)
    },

    addNewPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounter: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state)
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this.callSubscriber(this._state)
    },

    callSubscriber() {
        console.log('state was changed');
    },
    subscriber(observer) {
        this.callSubscriber = observer;
    },
}

export default store;