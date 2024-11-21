import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors";
import css from './CatalogItemList.module.css';
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogItemList = ({ onLoadMore }) => {
    const trucks = useSelector(selectTrucks);

    return (
        <div>
            <ul className={css.itemsList}>
            {
                trucks.map((truck) => (
                    <li className={css.catalogListItem} key={truck.id}>
                        <CatalogItem truck={truck} />
                    </li>
                ))
            }
            </ul>
            <button onClick={onLoadMore}>Load more</button>
        </div>
        

    )
};
export default CatalogItemList;