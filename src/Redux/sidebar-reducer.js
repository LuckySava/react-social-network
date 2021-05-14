import ACTIONS from "./actions";

let initialState =  {
    friends: [
        {
            id: 1,
            avatar: 'https://image.flaticon.com/icons/png/512/62/62839.png',
            name: 'Ivan'
        },
        {
            id: 2,
            avatar: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/face_icon_137648.png',
            name: 'Olga'
        },
        {
            id: 3,
            avatar: 'https://cdn.icon-icons.com/icons2/933/PNG/512/emoticon-with-happy-face_icon-icons.com_72768.png',
            name: 'Lana'
        },
        {
            id: 4,
            avatar: 'https://image.flaticon.com/icons/png/512/62/62839.png',
            name: 'nVera'
        }
    ]
}

 const sidebarReducer = (state = initialState, action) => {

    
    return state
}

export default sidebarReducer;