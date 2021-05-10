import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = (props) => {

    let postsElements = props.posts.map(item => <Post message={item.message} likeCounter={item.likesCounter} />);

    let addPostsText = React.createRef();

    let addPost = () => {
        let text = addPostsText.current.value;
        console.log(text);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea ref={addPostsText} name="" id="" cols="30" rows="10"></textarea>
                <p>
                    <button onClick={addPost}>Add Button</button>
                </p>
            </div>

            <div className={s.posts}>
                {  postsElements }
            </div>


        </div>
    )
}

export default MyPosts;