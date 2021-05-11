import style from './Friends.module.scss';

const Friend = (props) => {
    
    return(
        <div className={style.single_friend}>
            <img src={props.avatar} alt={props.name} />
            <p className={style.frind_name}>{props.name}</p>
        </div>
    )
}

export default Friend;