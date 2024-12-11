import { fetchTruckById } from "./fetchTruckById";

const getTruckDetails = async (id, setLoading, setError, setTruck) => {
    try {
        setError(false);
        setLoading(true);
        const data = await fetchTruckById(id); 
        setTruck(data); 
    } catch (err) {
        setError(true); 
    } finally {
        setLoading(false); 
    }
};

export default getTruckDetails;
