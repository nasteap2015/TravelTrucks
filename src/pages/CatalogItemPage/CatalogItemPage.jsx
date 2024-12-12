import Loader from "../../components/Loader/Loader";
import css from './CatalogItemPage.module.css';
import getTruckDetails from "../../utils/useFetchTruckbyId";
import { Link } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CatalogItemPage = () => {
    const { id } = useParams();
    const [truck, setTruck] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if (!id) {
            return;
        }
        getTruckDetails(id, setLoading, setError, setTruck);
    }, [id]);

    return (
        <div className={css.catalogItemPageContainer}>
            {loading && <Loader />}
            <div className={css.goBackButtonContainer}>
                <Link to={"/catalog"} className={css.goBackButton}>Go back</Link>
            </div>
            {error ? (
            <p>Couldn't load information, please try later</p>
            ) : (
            truck && <ItemDetails truck={truck} />
        )}
        </div>
    )
      
};

export default CatalogItemPage;