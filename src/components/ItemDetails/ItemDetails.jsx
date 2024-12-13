import css from './ItemDetails.module.css';
import clsx from 'clsx';
import formatLocation from "../../utils/formatLocation";
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Formik, Form, Field } from 'formik';

const ItemDetails = ({ truck }) => {
    const {
        name,
        price,
        rating,
        reviews,
        location,
        description,
        gallery
    } = truck;

    const reviewsAmount = reviews.length;
    const formatedPrice = String(price.toFixed(2));
    const formatedLocation = formatLocation(location);

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    
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

                <ul className={css.linksContainer}>
                    <li>
                        <NavLink to="features" className={buildLinkClass}>Features</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink>
                    </li>
                </ul>
            
            <div>
                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>
                <div>
                    <h3>Book your campervan now</h3>
                    <p>Stay connected! We are always ready to help you.</p>
                    <Formik>
                        <Form>
                            <Field></Field>
                            <Field></Field>
                            <Field></Field>
                        </Form>
                    </Formik>
                    
                </div>
            </div>
        </div>
    )
};

export default ItemDetails;