import { createAsyncThunk } from "@reduxjs/toolkit";
import formatLocation from "../../utils/formatLocation";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchAll",
  async function ({ page, filters = {}, reset = false }, thunkAPI) {
    try {
      const { location, type, transmission, truckEquipment = [] } = filters;

      const params = {
        page,
        limit: 4,
      };

      if (location) {
        params.location = formatLocation(location);
      }

      if (type) {
        params.form = type;
      }

      if (transmission) {
        params.transmission = transmission.toLowerCase();
      }

      [
        "AC",
        "kitchen",
        "TV",
        "bathroom",
        "refrigerator",
        "microwave",
        "water",
      ].forEach((equipment) => {
        if (truckEquipment.includes(equipment)) {
          params[equipment] = true;
        }
      });

      const { data } = await axios.get("/campers", {
        params: {
          ...params,
          limit: 4,
        },
      });
      return { reset, ...data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
