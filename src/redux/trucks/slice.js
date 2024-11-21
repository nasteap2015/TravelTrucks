import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.loading = false;
  state.error = action.payload;
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    totalItems: 0,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, handlePending)
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        const { items, total, reset } = action.payload;
        state.loading = false;
        state.error = null;
        if (reset) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }

        state.totalItems = total;
      })
      .addCase(fetchTrucks.rejected, handleRejected);
  },
});

export const trucksReducer = trucksSlice.reducer;
