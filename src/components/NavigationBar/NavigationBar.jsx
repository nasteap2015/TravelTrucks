import css from './NavigationBar.module.css';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const NavigationBar = () => {

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.navLink, isActive && css.active);
    };

    return (
        <div className={css.barContainer}>
            <svg width="136" height="15">
                <use href="../../../public/img/icons.svg#icon-logo"></use>
            </svg>
            <nav className={css.navContainer}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
            </nav>
        </div>
    )
};
export default NavigationBar;