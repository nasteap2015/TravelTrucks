import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    itemsId: [],
  },
  reducers: {
    markAsFavorite: (state, action) => {
      const id = action.payload;
      if (!state.itemsId.includes(id)) {
        state.favIds.push(id);
      }
    },
  },
});

export const favsReducer = favouritesSlice.reducer;
