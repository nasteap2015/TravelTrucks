import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors";
import css from './CatalogItemList.module.css';
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogItemList = () => {
    const trucks = useSelector(selectTrucks);
    console.log(trucks);
    return (
        <ul className={css.itemsList}>
            {trucks.length > 0 ? (
                trucks.map((truck) => (
                    <li className={css.catalogListItem} key={truck.id}>
                        <CatalogItem truck={truck} />
                    </li>
                ))
            ) : (
                <li>
                    <p>No trucks</p>
                </li>
            )}
        </ul>
    )
};
export default CatalogItemList;