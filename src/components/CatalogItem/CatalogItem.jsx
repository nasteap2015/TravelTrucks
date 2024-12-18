import getEquipmentList from "../../utils/getEquipmentList";
import css from './CatalogItem.module.css';
import { Link } from "react-router-dom";
import { markAsFavorite } from "../../redux/favourites/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import formatLocation from "../../utils/formatLocation";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";
import { CiMap } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import getIcon from "../../utils/getIcon";
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
    const formatedLocation = formatLocation(location);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(markAsFavorite(id))
    };
    const favsId = useSelector(selectFavourites);
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
                            <LuHeart className={clsx(isFavourite && css.favIconFavourite)} size={24} />
                        </button>
                    </div>
                </div>
                
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
                <p className={css.truckDescription}>{description}</p>
                <ul className={css.equipmentList}>
                    <li className={css.equipmentItem} key={transmission}>
                        {transmission === "automatic" ? <TbAutomaticGearbox className={css.icon} /> : <TbManualGearbox className={css.icon} />}
                        {transmission}
                    </li>
                    {equipmentList.length > 0 ? (
                    equipmentList.map((equipmentItem) => (
                        <li className={css.equipmentItem} key={equipmentItem}>
                        {getIcon(equipmentItem)}
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
                    <Link className={css.catalogItemButton} to={`/catalog/${id}`}>Show more</Link>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem;