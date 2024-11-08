import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors";
import css from './CatalogItemList.module.css';
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogItemList = () => {
    const trucks = useSelector(selectTrucks);

    return (
        <ul className={css.itemsList}>
            {
                trucks.map((truck) => (
                    <li className={css.catalogListItem} key={truck.id}>
                        <CatalogItem truck={truck} />
                    </li>
                ))
            }
        </ul>
    )
};
export default CatalogItemList;