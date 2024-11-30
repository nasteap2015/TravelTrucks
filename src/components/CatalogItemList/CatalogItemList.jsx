import { useSelector } from "react-redux";
import { selectTrucks, selectLoading, selectError, selectTotalItems } from "../../redux/trucks/selectors";
import css from './CatalogItemList.module.css';
import CatalogItem from "../CatalogItem/CatalogItem";
import Loader from "../../components/Loader/Loader";

const CatalogItemList = ({ onLoadMore }) => {
    const trucks = useSelector(selectTrucks);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const totalItems = useSelector(selectTotalItems);

    return (
        <div className={css.itemListContainer}>
            {loading && <Loader />}
            {error && <p>Couldn't load information, please try later</p>}
            <ul className={css.itemsList}>
                {
                    trucks.map((truck) => (
                        <li className={css.catalogListItem} key={truck.id}>
                            <CatalogItem truck={truck} />
                        </li>
                    ))
                }
            </ul>
            {trucks.length < totalItems && < button onClick={onLoadMore} className={css.loadMoreButton}>Load more</button>}
        </div>
    )
};
export default CatalogItemList;