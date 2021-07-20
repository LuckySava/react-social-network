import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
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
}


it('length of posts should be incremented', () => {
    let action = addPostActionCreator('It-Kamasutra');

    // action

    let newState = profileReducer(state, action);

    // expectation

    expect(newState.posts.length).toBe(5);

})


it('check message text', () => {

    // test data

    let action = addPostActionCreator('It-Kamasutra');

    // action

    let newState = profileReducer(state, action);

    // expectation

    expect(newState.posts[4].message).toBe('It-Kamasutra');

})

it('after deleting length of message should be decrement', () => {

    // test data

    let action = deletePost(1);

    // action

    let newState = profileReducer(state, action);

    // expectation

    expect(newState.posts.length).toBe(3);

})