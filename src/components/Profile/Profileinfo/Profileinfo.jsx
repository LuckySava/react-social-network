import s from './Profileinfo.module.scss';

const Profileinfo = () => {
    return (
        <div>

            <div className="ava">
                <img className={s.small_img} src="https://picsum.photos/100" alt="" />
            </div>

            <p>Ava + Text</p>
            
        </div>
    )
}

export default Profileinfo;