import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <a href="">Profile</a>
                </li>
                
                <li>
                    <a href="">Messages</a>
                </li>

                <li>
                    <a href="">News</a>
                </li>

                <li>
                    <a href="">Music</a>
                </li>

                <li>
                    <a href="">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;