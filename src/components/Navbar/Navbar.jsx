import { NavLink } from 'react-router-dom';
import StoreContext from '../../context';
import Friend from '../Friends/Friend';
import s from './Navbar.module.scss'


const Navbar = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                return <nav className={s.nav}>
                <ul>
                    <li className={`${s.item}`}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </li>
    
                    <li className={`${s.item}`}>
                        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                    </li>
    
                    <li className={`${s.item}`}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </li>
    
                    <li className={`${s.item}`}>
                        <NavLink to="music" activeClassName={s.active}>Music</NavLink>
                    </li>
    
                    <li className={`${s.item}`}>
                        <NavLink to="settings" activeClassName={s.active}>Settings</NavLink>
                    </li>
                </ul>
    
                <h3 className={s.friend_title}>Friends</h3>
    
                <div className={s.friends_block}>
                    {
                        store.getState().sidebar.friends.map(item => <Friend avatar={item.avatar} name={item.name} />)
                    }
                </div>
    
            </nav>
            }
        }
        
    </StoreContext.Consumer>
}

export default Navbar;