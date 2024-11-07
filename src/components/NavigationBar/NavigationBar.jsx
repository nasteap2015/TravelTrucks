import css from './NavigationBar.module.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className={css.barContainer}>
            <svg width="136" height="15">
                <use href="../../../public/img/icons.svg#icon-logo"></use>
            </svg>
            <nav className={css.navContainer}>
                <Link to="/" className={css.navLink}>Home</Link>
                <Link to="/catalog" className={css.navLink}>Catalog</Link>
            </nav>
        </div>
    )
};
export default NavigationBar;