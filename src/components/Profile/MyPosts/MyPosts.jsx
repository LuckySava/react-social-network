import s from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = () => {
    return (
        <div>
            <div className={s.new_post}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Button</button>
            </div>

            <div className={s.posts}>
                <Post message='Hi, how are you' likeCounter='24'/>
                <Post message="it's my post first" likeCounter='18' />
            </div>


        </div>
    )
}

export default MyPosts;