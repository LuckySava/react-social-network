import style from './Friends.module.scss';

const Friend = (props) => {
    
    return(
        <div className={style.single_friend}>
            <img src={props.avatar} alt={props.name} />
            <span className={style.frind_name}>{props.name}</span>
        </div>
    )
}

export default Friend;