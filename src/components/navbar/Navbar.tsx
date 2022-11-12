import classes from './Navbar.module.sass';

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.nav__item}>Profile</li>
                <li className={classes.nav__item}>Messages</li>
                <li className={classes.nav__item}>Profile</li>
            </ul>
        </nav>
    );
}