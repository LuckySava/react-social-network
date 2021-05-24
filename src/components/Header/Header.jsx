import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = (props) => {
    console.log('Header', props);
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://picsum.photos/100" alt="" />

            <div className={s.login_block}>
                {props.isAuth ? <h5>{props.login}</h5> :  <NavLink to={'/login'}> Login </NavLink>}
               
            </div>
        </header>
    )
}

export default Header;