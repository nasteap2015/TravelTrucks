import { fetchTruckById } from "./fetchTruckById";

const getTruckDetails = async (id, setLoading, setError, setTruck) => {
    try {
        setError(false);
        setLoading(true);
        const data = await fetchTruckById(id); 
        console.log("Truck data fetched:", data);
        setTruck(data); 
    } catch (err) {
        console.error("Error fetching truck:", err);
        setError(true); 
    } finally {
        setLoading(false); 
    }
};

export default getTruckDetails;
