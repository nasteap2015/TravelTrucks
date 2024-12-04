import Loader from "../../components/Loader/Loader";
import formatLocation from "../../utils/formatLocation";
import getEquipmentList from "../../utils/getEquipmentList";
import css from './CatalogItemPage.module.css';
import useFetchTruckById from "../../utils/useFetchTruckbyId";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

const CatalogItemPage = () => {
    const { truck, loading, error } = useFetchTruckById();
    const appLocation = useLocation();
    const backLinkHref = useRef(appLocation.state ?? '/catalog');
    
    const equipmentList = getEquipmentList(truck);
    console.log(truck);
    return (
        <div>
            {loading && <Loader />}
            {error ? <p>Couldn't load information, please try later</p> : <ItemDetails truck={truck} />}
        </div>
    )
      
};

export default CatalogItemPage;