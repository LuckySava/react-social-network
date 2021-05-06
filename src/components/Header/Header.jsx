import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://picsum.photos/100" alt="" />
        </header>
    )
}

export default Header;