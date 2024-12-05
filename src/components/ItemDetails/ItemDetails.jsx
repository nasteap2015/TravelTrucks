import css from './ItemDetails.module.css';
import formatLocation from "../../utils/formatLocation";
import getEquipmentList from "../../utils/getEquipmentList";

const ItemDetails = ({ truck }) => {
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

    return (
        <div>
            <h2>{name}</h2>
            <div className={css.ratingLocationContainer}>
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
            </div>
        </div>
    )
};

export default ItemDetails;