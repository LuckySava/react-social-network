import s from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = () => {
    let posts = [
        {
            id: 1,
            message: 'Hi, how are you',
            likesCounter: 15,
        },
        {
            id: 1,
            message: 'it\'s my first post here',
            likesCounter: 42,
        },
        {
            id: 1,
            message: 'whorray',
            likesCounter: 8,
        },
    ];

    let postsElements = posts.map(item => <Post message={item.message} likeCounter={item.likesCounter} />);
    return (
        <div>
            <div className={s.new_post}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <p>
                    <button>Add Button</button>
                </p>
            </div>

            <div className={s.posts}>
                {  postsElements }
            </div>


        </div>
    )
}

export default MyPosts;