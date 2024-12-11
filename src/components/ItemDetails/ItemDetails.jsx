import css from './ItemDetails.module.css';
import formatLocation from "../../utils/formatLocation";
import getEquipmentList from "../../utils/getEquipmentList";
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
            <h2 className={css.itemName}>{name}</h2>
            <div className={css.ratingLocationContainer}>
                <p className={css.rating}>
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
            <h2 className={css.itemPrice}>€{formatedPrice}</h2>
            <ul className={css.galleryList}>
                {
                    gallery.map((galleryItem) => (
                        <li className={css.galleryItem} key={gallery.indexOf(galleryItem)}>
                           <img className={css.galleryItemImg} src={galleryItem.original} alt={name} />
                        </li>
                    ))
                }
            </ul>
            <p className={css.description}>{description}</p>

            <div>
                <ul>
                    <li>
                        <Link to="features">Features</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
                     
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default ItemDetails;