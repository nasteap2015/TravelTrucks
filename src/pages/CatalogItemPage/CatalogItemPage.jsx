import Loader from "../../components/Loader/Loader";
import css from './CatalogItemPage.module.css';
import getTruckDetails from "../../utils/useFetchTruckbyId";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTruckById } from "../../utils/fetchTruckById";

const CatalogItemPage = () => {
    // const { truck, loading, error } = useFetchTruckById();
    // const appLocation = useLocation();
    // const backLinkHref = useRef(appLocation.state ?? '/catalog');
    // console.log("CatalogItemPage rendered");
    const { id } = useParams();
    const [truck, setTruck] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log("ID from useParams:", id); // Debugging: Sprawdzenie ID w URL

    useEffect(() => {
        if (!id) {
            return;
        }

        console.log("useEffect triggered with ID:", id);

        getTruckDetails(id, setLoading, setError, setTruck);
    }, [id]);

    console.log(truck);
    return (
        <div>
            {loading && <Loader />}
            {error ? (
            <p>Couldn't load information, please try later</p>
        ) : (
            truck && <ItemDetails truck={truck} />  // Przekazanie truck tylko, jeśli dane są dostępne
        )}
        </div>
    )
      
};

export default CatalogItemPage;