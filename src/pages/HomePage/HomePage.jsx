import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={css.homePageContainer}>
            <h1 className={css.homepageTitle}>Campers of your dreams</h1>
            <h2 className={css.homepageText}>You can find everything you want in our catalog</h2>
            <button className={css.homepageButton}>View Now</button>
        </div>
    )
      
};

export default HomePage;
