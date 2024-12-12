import getTruckDetails from "../../utils/useFetchTruckbyId";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getEquipmentList from "../../utils/getEquipmentList";
import css from './Features.module.css';
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";
import getIcon from "../../utils/getIcon";

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

    if (!truck) {
        return <p>No truck data available.</p>;
    }

    const { transmission } = truck;
    const equipmentList = getEquipmentList(truck);

    return (
        <div className={css.featuresContainer}>
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
            <div>
                <h3 className={css.detailsTitle}>Venicle details</h3>
            <div className={css.detailsContainer}>
                <ul className={css.detailsList}>
                    <li>Form</li>
                    <li>Length</li>
                    <li>Width</li>
                    <li>Height</li>
                    <li>Tank</li>
                    <li>Consumption</li>
                </ul>
                <ul className={css.detailsList}>
                    <li>{truck.form}</li>
                    <li>{truck.length}</li>
                    <li>{truck.width}</li>
                    <li>{truck.height}</li>
                    <li>{truck.tank}</li>
                    <li>{truck.consumption}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Features;