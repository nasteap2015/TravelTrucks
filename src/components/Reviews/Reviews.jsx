import getTruckDetails from "../../utils/useFetchTruckbyId";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from './Reviews.module.css';
import getIcon from "../../utils/getIcon";
import StarRating from "../../utils/starRating";

const Features = () => {
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

    if (loading) {
        return <p>Loading reviews...</p>
    }

    if (!truck) {
        return <p>No truck data available.</p>;
    }

    const { reviews } = truck;

    return (
        <div className={css.reviewsContainer}>
            <ul className={css.list}>
                    {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <li className={css.reviewItem} key={review.reviewer_name}>
                            <div className={css.imgNameContainer}>
                                <div className={css.reviewImg}>
                                    <p>{review.reviewer_name[0]}</p>
                                </div>
                                <div className={css.nameRatingContainer}>
                                    <h5>{review.reviewer_name}</h5>
                                    <StarRating reviewer_rating={review.reviewer_rating}/>
                                </div>
                            </div>
                            <p className={css.reviewText}>{review.comment}</p>
                        </li>
                    ))
                    ) : (
                    <li>
                        <p>No reviews for this item</p>
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Features;