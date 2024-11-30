import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTruckById } from '../../utils/fetchTruckById';
import Loader from "../../components/Loader/Loader";
import formatLocation from "../../utils/formatLocation";
import getEquipmentList from "../../utils/getEquipmentList";
import css from './CatalogItemPage.module.css'

const CatalogItemPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [truck, setTruck] = useState({});

    useEffect(() => {
    async function getTruckDetails() {
        try {
        setError(false);
        setLoading(true);
            const { data } = await fetchTruckById(id);
            setTruck(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTruckDetails();
    }, [id]);

    console.log(truck);
    const {
        name,
        price,
        rating,
        reviews,
        location,
        description,
        transmission,
        gallery
    } = truck;

    const equipmentList = getEquipmentList(truck);
    const reviewsAmount = reviews.length;
    const formatedPrice = String(price.toFixed(2));
    const formatedLocation = formatLocation(location);
    console.log(formatedPrice);

    return (
        <div>
            {loading && <Loader />}
            {error && <p>Couldn't load information, please try later</p>}
            <h2>{name}</h2>
            {/* <div className={css.ratingLocationContainer}>
                    <p>
                        <svg width="16px" height="16px" fill="#FFC531">
                            <use href="../../../public/img/icons.svg#icon-star"></use>
                        </svg>
                        {rating}({reviewsAmount} Reviews)</p>
                    <p>
                        <svg width="16px" height="16px" className={css.mapIcon}>
                            <use href='../../../public/img/icons.svg#icon-map'></use>
                        </svg>
                        {formatedLocation}
                    </p>
                </div> */}
        </div>
    )
      
};

export default CatalogItemPage;