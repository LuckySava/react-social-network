// import ACTIONS from "./actions";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}



export default store;