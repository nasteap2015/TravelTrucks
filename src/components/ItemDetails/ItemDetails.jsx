import css from './ItemDetails.module.css';
import clsx from 'clsx';
import formatLocation from "../../utils/formatLocation";
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Formik, Form, Field } from 'formik';
import { CiMap } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

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

    const handleSubmit = (values, actions) => {
        toast.success('Request successfully sent');
        actions.resetForm();
    };

    const initialValues = {
        userName: "",
        userEmail: "",
        bookingDate: "",
        comment: "",
    };

    
    return (
        <div>
            <h2 className={css.itemName}>{name}</h2>
            <div className={css.ratingLocationContainer}>
                <div className={css.detailsContainer}>
                        <FaStar color="#FFC531" size={16} />
                        <p>{rating}({reviewsAmount} Reviews)</p>
                    </div>
                    <div className={css.detailsContainer}>
                        <CiMap size={20} />
                        <p>{formatedLocation}</p>
                    </div>
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
            
            <div className={css.subPageContainer}>
                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>
                <div className={css.bookFormContainer}>
                    <h3 className={css.bookTitle}>Book your campervan now</h3>
                    <p className={css.bookText}>Stay connected! We are always ready to help you.</p>
                    <div className={css.formContainer}>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            <Form>
                                <div className={css.form}>
                                    <Field type="text" name="userName" placeholder="Name*" className={css.input}/>
                                    <Field type="email" name="userEmail" placeholder="Email*" className={css.input}/>
                                    <Field type="text" name="bookingDate" placeholder="Booking date*" className={css.input}/>
                                    <Field as="textarea" name="comment" placeholder="Comment" className={css.input}/>
                                </div>
                                <button type="submit" className={css.sendButton}>Send</button>
                            </Form>
                        </Formik>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetails;