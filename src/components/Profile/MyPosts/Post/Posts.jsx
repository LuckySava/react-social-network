import s from './Posts.module.scss';

const Post = (props) => {
    return (
        <div>
            <aside className={s.single_post}>
                <img src="http://udp.by/customlib/htmltemplate/admin/pixit/assets/img/avatars/avatar6_big.png" alt="" />
                <div className={s.message}>
                    {props.message}
                </div>
            </aside>
            <p className={s.like_counter}> &hearts; {props.likeCounter}</p>
        </div>

    )
}

export default Post;