import css from './HomePage.module.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className={css.homePageContainer}>
            <h1 className={css.homepageTitle}>Campers of your dreams</h1>
            <h2 className={css.homepageText}>You can find everything you want in our catalog</h2>
            <div className={css.homePageButtonContainer}>
                <Link className={css.homePageButton} to="/catalog">View Now</Link>
            </div>
        </div>
    )
      
};

export default HomePage;
