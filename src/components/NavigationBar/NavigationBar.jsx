import css from './NavigationBar.module.css';
import { Link, NavLink } from "react-router-dom";
import clsx from 'clsx';

const NavigationBar = () => {

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.navLink, isActive && css.active);
    };

    return (
        <div className={css.barContainer}>
           <Link to="/" className={css.logo}>TravelTrucks</Link>
            <nav className={css.navContainer}>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
            </nav>
        </div>
    )
};
export default NavigationBar;