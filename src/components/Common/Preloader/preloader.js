import s from './preloader.module.scss';
import spinner from '../../../assets/images/spinner.svg'

let Preloader = () => {
    return <img className={s.loader} src={spinner} /> 
}

export default Preloader;