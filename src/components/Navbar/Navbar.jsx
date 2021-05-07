import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                
                <li>
                    <NavLink to="/dialogs">Messages</NavLink>
                </li>

                <li>
                    <NavLink to="/news">News</NavLink>
                </li>

                <li>
                    <NavLink to="music">Music</NavLink>
                </li>

                <li>
                    <NavLink to="settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;