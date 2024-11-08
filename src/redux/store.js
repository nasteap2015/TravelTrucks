import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucks/slice";
import { filtersReducer } from "./filters/slice";
import { favsReducer } from "./favourites/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favsPersistConfig = {
  key: "auth-token",
  storage,
  whitelist: ["token"],
};

const persistedFavsReducer = persistReducer(favsPersistConfig, favsReducer);

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filtersReducer,
    favourites: persistedFavsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
