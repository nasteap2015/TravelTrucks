import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    transmission: "",
    equipment: [],
  },
  reducers: {
    changeFilter(state, action) {
      const { type, location, transmission, equipment } = action.payload;
      state.location = location;
      state.type = type;
      state.transmission = transmission;
      state.equipment = equipment;
    },
    deleteFilters(state) {
      state.location = "";
      state.type = "";
      state.transmission = "";
      state.equipment = [];
    },
  },
});

export const { changeFilter, deleteFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
