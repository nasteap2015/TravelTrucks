import getEquipmentList from "../../utils/getEquipmentList";
import css from './CatalogItem.module.css';
import { Link } from "react-router-dom";
import { markAsFavorite } from "../../redux/favourites/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import clsx from "clsx";

const CatalogItem = ({ truck }) => {
    const {
        id,
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
    const formatedLocation = String(location.split(",").reverse().join(","));
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(markAsFavorite(id))
    };
    const favsId = useSelector(selectFavourites);
    console.log(favsId);
    const isFavourite = favsId.includes(id);

    return (
        <div className={css.catalogItemContainer}>
            <div className={css.catalogItemImgContainer}>
                <img className={css.catalogItemImg} src={gallery[0].thumb} alt="" />
            </div>
            
            <div className={css.catalogItemInfoContainer}>
                <div className={css.catalogItemInfoTitleContainer}>
                    <h2 className={css.itemName}>{name}</h2>
                    <div className={css.priceContainer}>
                        <h2 className={css.itemPrice}>€{formatedPrice}</h2>
                            <button onClick={handleClick} className={css.favButton}>
                                <svg className={clsx(isFavourite && css.favIconFavourite)} width="24px" height="20.57px">
                                    <use href="../../../public/img/icons.svg#icon-heart"></use>
                                </svg>
                            </button>
                    </div>
                </div>
                
                <div className={css.ratingLocationContainer}>
                    <p>
                        <svg width="16px" height="16px" fill="#FFC531">
                            <use href="../../../public/img/icons.svg#icon-star"></use>
                        </svg>
                        {rating}({reviewsAmount} Reviews)</p>
                    <p>
                        <svg width="16px" height="16px">
                            <use href='../../../public/img/icons.svg#icon-map'></use>
                        </svg>
                        {formatedLocation}
                    </p>
                </div>
                <p className={css.truckDescription}>{description}</p>
                <ul className={css.equipmentList}>
                    <li className={css.equipmentItem} key={transmission}>
                        <svg width="20px" height="20px">
                            <use href={`../../../public/img/icons.svg#icon-automatic`}></use>
                        </svg>
                        {transmission}
                    </li>
                    {equipmentList.length > 0 ? (
                    equipmentList.map((equipmentItem) => (
                    <li className={css.equipmentItem} key={equipmentItem}>
                        <svg width="20px" height="20px" stroke="#fff">
                            <use href={`../../../public/img/icons.svg#icon-${equipmentItem}`}></use>
                        </svg>
                        {equipmentItem}
                    </li>
                ))
            ) : (
                <li>
                    <p>Equipment didn't specified</p>
                </li>
            )}
                </ul>

                <div className={css.catalogItemButtonContainer}>
                <Link className={css.catalogItemButton} to="/catalog/:id">Show more</Link>
            </div>
            </div>
            
        </div>
    )
}

export default CatalogItem;