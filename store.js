import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import restaurantReducer from "./slices/restaurantSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant : restaurantReducer
  },
});
