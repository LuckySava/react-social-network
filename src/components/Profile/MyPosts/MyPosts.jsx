import s from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = (props) => {

    let postsElements = props.posts.map(item => <Post message={item.message} likeCounter={item.likesCounter} />);
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