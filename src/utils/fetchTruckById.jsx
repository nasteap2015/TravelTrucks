import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";


export const fetchTruckById = async (id) => {
    if (!id) throw new Error("Truck ID is required");
    try {
        const response = await axios.get(`/campers/${id}`);
        return response.data; 
    } catch (error) {
        console.error(`Error fetching truck with ID ${id}:`, error.message);
        throw error; 
    }
};