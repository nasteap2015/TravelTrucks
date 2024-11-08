import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    equipment: [],
  },
  reducers: {
    changeFilter(state, action) {
      const { type, location, equipment } = action.payload;
      state.location = location;
      state.type = type;
      state.equipment = equipment;
    },
    deleteFilters(state) {
      state.location = "";
      state.type = "";
      state.equipment = [];
    },
  },
});

export const { changeFilter, deleteFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
