import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTruckById } from './fetchTruckById';

const useFetchTruckById = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [truck, setTruck] = useState({});

    useEffect(() => {
        const getTruckDetails = async() => {
            try {
                setError(false);
                setLoading(true);
                const { data } = await fetchTruckById(id);
                setTruck(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getTruckDetails();
    }, [id]);

    return { truck, loading, error };
};

export default useFetchTruckById;
